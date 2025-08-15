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
  const filterRef = useRef(null)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Update highlight effect
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.15) 0%,
          rgba(255,255,255,0.05) 30%,
          rgba(255,255,255,0) 60%
        )`
      }
    }

    const handleMouseLeave = () => {
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = 'none'
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const cardContent = (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="glass-card-distortion">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.008" 
            numOctaves="2" 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="40" 
          />
        </filter>
      </svg>
      
      <Box className="glass-filter" />
      <Box className="glass-overlay" />
      <Box className="glass-specular" />
      {/* Animated Sand Background */}
      <Box
        position="absolute"
        inset="0"
        zIndex="1"
        overflow="hidden"
        borderRadius="inherit"
      >
        <Box
          position="absolute"
          width="120%"
          height="120%"
          top="-10%"
          left="-10%"
          backgroundImage="url('/images/sand1.jpeg')"
          backgroundSize="200px 200px"
          backgroundRepeat="repeat"
          opacity="0.15"
          sx={{
            animation: 'sandMove1 15s infinite linear',
            '@keyframes sandMove1': {
              '0%': { transform: 'translate(0, 0)' },
              '100%': { transform: 'translate(-50px, -50px)' }
            }
          }}
        />
        <Box
          position="absolute"
          width="120%"
          height="120%"
          top="-10%"
          left="-10%"
          backgroundImage="url('/images/sand1.jpeg')"
          backgroundSize="300px 300px"
          backgroundRepeat="repeat"
          opacity="0.08"
          sx={{
            animation: 'sandMove2 20s infinite linear reverse',
            '@keyframes sandMove2': {
              '0%': { transform: 'translate(0, 0) scale(1.1)' },
              '100%': { transform: 'translate(40px, 40px) scale(1.1)' }
            }
          }}
        />
      </Box>
      
      <Box 
        className="glass-distortion-overlay"
        position="absolute"
        inset="0"
        background="radial-gradient(circle at 20% 30%, rgba(244, 164, 96, 0.1) 0%, transparent 80%), radial-gradient(circle at 80% 70%, rgba(244, 164, 96, 0.1) 0%, transparent 80%)"
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
            margin="0 0 10px 0"
            fontWeight="700"
            color="#ffffff"
            textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
            opacity="1 !important"
            zIndex="200"
            position="relative"
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
        '--bg-color': 'rgba(139, 69, 19, 0.5)',
        '--highlight': 'rgba(244, 164, 96, 0.4)',
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
          backdropFilter: 'blur(8px) saturate(150%) brightness(1.2)',
          filter: 'url(#glass-card-distortion)'
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
          '--bg-color': 'rgba(101, 67, 33, 0.4)',
          '--highlight': 'rgba(222, 184, 135, 0.3)'
        }
      }}
      {...props}
    >
      {cardContent}
    </Box>
  )
}

export default GlassCard