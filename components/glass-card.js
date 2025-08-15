import { Box, Heading, Text } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const GlassCard = ({ 
  children, 
  title, 
  description, 
  width = "300px", 
  height = "200px",
  onClick,
  href,
  ...props 
}) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    let animationId
    const startTime = Date.now()
    
    // Continuous animation for liquid glass effect
    const animateDistortion = () => {
      const elapsed = Date.now() - startTime
      const time = elapsed * 0.001 // Convert to seconds
      
      // Create dynamic distortion values
      const scaleValue = 77 + Math.sin(time * 0.5) * 30 + Math.cos(time * 0.3) * 20
      
      const filter = document.querySelector('#glass-distortion feDisplacementMap')
      if (filter) {
        filter.setAttribute('scale', scaleValue.toString())
      }
      
      // Create moving highlight effect
      const rect = element.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const radiusX = Math.sin(time * 0.4) * centerX * 0.8
      const radiusY = Math.cos(time * 0.6) * centerY * 0.8
      const x = centerX + radiusX
      const y = centerY + radiusY
      
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.15) 0%,
          rgba(255,255,255,0.05) 30%,
          rgba(255,255,255,0) 60%
        )`
      }
      
      animationId = requestAnimationFrame(animateDistortion)
    }
    
    // Start continuous animation
    animateDistortion()

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Override with mouse position when hovering
      const filter = document.querySelector('#glass-distortion feDisplacementMap')
      if (filter) {
        const scaleX = (x / rect.width) * 100
        const scaleY = (y / rect.height) * 100
        filter.setAttribute('scale', Math.min(scaleX, scaleY).toString())
      }
      
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.2) 0%,
          rgba(255,255,255,0.08) 30%,
          rgba(255,255,255,0) 60%
        )`
      }
    }

    element.addEventListener('mousemove', handleMouseMove)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const cardContent = (
    <>
      
      <Box className="glass-filter" />
      <Box className="glass-overlay" />
      <Box className="glass-specular" />
      
      <Box 
        className="glass-distortion-overlay"
        position="absolute"
        inset="0"
        background="radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 80%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.05) 0%, transparent 80%)"
        backgroundSize="300% 300%"
        animation="floatDistort 10s infinite ease-in-out"
        mixBlendMode="overlay"
        zIndex="2"
        pointerEvents="none"
      />
      
      <Box
        className="glass-content"
        position="relative"
        zIndex="100"
        padding="20px"
        color="#ffffff"
        textAlign="center"
        textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
        fontWeight="600"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {title && (
          <Heading
            as="h3"
            size="lg"
            margin="0 0 8px 0"
            fontWeight="700"
            color="#ffffff"
            textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
            opacity="1 !important"
            zIndex="200"
            position="relative"
            fontSize="lg"
            lineHeight="1.2"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {title}
          </Heading>
        )}
        {description && (
          <Text 
            margin="0" 
            opacity="1 !important"
            color="#ffffff"
            fontWeight="500"
            textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
            zIndex="200"
            position="relative"
            fontSize="sm"
            lineHeight="1.4"
          >
            {description}
          </Text>
        )}
        {children}
      </Box>
    </>
  )

  return (
    <Box
      ref={cardRef}
      className="glass-card"
      position="relative"
      width={width}
      height={height}
      borderRadius="20px"
      overflow="hidden"
      boxShadow="0 6px 24px rgba(0, 0, 0, 0.2)"
      cursor={onClick || href ? "pointer" : "default"}
      onClick={onClick}
      as={href ? "a" : "div"}
      href={href}
      target={href ? "_blank" : undefined}
      sx={{
        '--bg-color': 'rgba(255, 255, 255, 0.25)',
        '--highlight': 'rgba(255, 255, 255, 0.75)',
        '--text': '#ffffff',
        
        '&, & *, & h3, & p': {
          color: '#ffffff !important',
          opacity: '1 !important'
        },
        
        '.glass-filter, .glass-overlay, .glass-specular': {
          position: 'absolute',
          inset: '0',
          borderRadius: 'inherit'
        },
        
        '.glass-filter': {
          zIndex: '1',
          backdropFilter: 'blur(4px)',
          filter: 'url(#glass-distortion) saturate(120%) brightness(1.15)'
        },
        
        '.glass-overlay': {
          zIndex: '2',
          background: 'var(--bg-color)'
        },
        
        '.glass-specular': {
          zIndex: '3',
          boxShadow: 'inset 1px 1px 1px var(--highlight)'
        },

        '@keyframes floatDistort': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' }
        },

        '@media (prefers-color-scheme: dark)': {
          '--bg-color': 'rgba(0, 0, 0, 0.25)',
          '--highlight': 'rgba(255, 255, 255, 0.15)'
        }
      }}
      {...props}
    >
      {cardContent}
    </Box>
  )
}

export default GlassCard