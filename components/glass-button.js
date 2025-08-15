import { Button, Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const GlassButton = ({ 
  children, 
  onClick,
  href,
  as,
  leftIcon,
  rightIcon,
  size = "md",
  variant = "glass",
  ...props 
}) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const element = buttonRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Add highlight effect
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

  const sizeProps = {
    sm: { padding: '8px 16px', fontSize: '14px' },
    md: { padding: '12px 24px', fontSize: '16px' },
    lg: { padding: '16px 32px', fontSize: '18px' }
  }

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="glass-button-distortion">
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
      
      <Button
        ref={buttonRef}
        className="glass-button"
        onClick={onClick}
        as={as}
        href={href}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        sx={{
          '--bg-color': 'rgba(139, 69, 19, 0.5)',
          '--highlight': 'rgba(244, 164, 96, 0.4)',
          '--text': '#ffffff',
          
          position: 'relative',
          ...sizeProps[size],
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          overflow: 'hidden',
          background: 'transparent',
          transition: 'transform 0.2s ease',
          outline: 'none',
          color: '#ffffff',
          fontWeight: '700',
          textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)',
          
          '&::before, &::after': {
            pointerEvents: 'none'
          },

          '&:hover': {
            transform: 'scale(1.05)',
            background: 'transparent'
          },

          '&:active': {
            transform: 'scale(0.95)',
            background: 'transparent'
          },

          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            borderRadius: 'inherit',
            zIndex: '3',
            backdropFilter: 'blur(8px) saturate(150%) brightness(1.2)',
            filter: 'url(#glass-button-distortion)'
          },

          '&::after': {
            content: '""',
            position: 'absolute',
            inset: '0',
            borderRadius: 'inherit',
            zIndex: '4',
            background: 'var(--bg-color)'
          },

          '& > *': {
            position: 'relative',
            zIndex: '10',
            opacity: '1 !important',
            color: '#ffffff !important'
          },
          
          '&, & *, & span, & svg': {
            color: '#ffffff !important',
            opacity: '1 !important'
          },
          
          '& .chakra-button__group, & .chakra-icon': {
            color: '#ffffff !important',
            opacity: '1 !important'
          },

          '@media (prefers-color-scheme: dark)': {
            '--bg-color': 'rgba(101, 67, 33, 0.4)',
            '--highlight': 'rgba(222, 184, 135, 0.3)'
          }
        }}
        {...props}
      >
        
        <div className="glass-specular" style={{
          position: 'absolute',
          inset: '0',
          borderRadius: 'inherit',
          zIndex: '5',
          boxShadow: 'inset 1px 1px 1px var(--highlight)',
          pointerEvents: 'none'
        }} />
        {children}
      </Button>
    </>
  )
}

export default GlassButton