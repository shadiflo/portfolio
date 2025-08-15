import { Button } from '@chakra-ui/react'

const SimpleGlassButton = ({ 
  children, 
  onClick,
  href,
  as,
  leftIcon,
  rightIcon,
  size = "md",
  ...props 
}) => {
  const sizeProps = {
    sm: { padding: '8px 16px', fontSize: '14px' },
    md: { padding: '12px 24px', fontSize: '16px' },
    lg: { padding: '16px 32px', fontSize: '18px' }
  }

  return (
    <Button
      className="simple-glass-button"
      onClick={onClick}
      as={as}
      href={href}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      sx={{
        position: 'relative',
        ...sizeProps[size],
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        overflow: 'hidden',
        background: 'rgba(139, 69, 19, 0.4)',
        backdropFilter: 'blur(8px) saturate(150%) brightness(1.2)',
        transition: 'all 0.2s ease',
        outline: 'none',
        color: '#ffffff',
        fontWeight: '700',
        textShadow: '0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)',
        boxShadow: 'inset 1px 1px 1px rgba(244, 164, 96, 0.4), 0 4px 12px rgba(139, 69, 19, 0.2)',
        border: '1px solid rgba(244, 164, 96, 0.3)',

        '&:hover': {
          transform: 'scale(1.05)',
          background: 'rgba(139, 69, 19, 0.5)',
          boxShadow: 'inset 1px 1px 1px rgba(244, 164, 96, 0.5), 0 6px 16px rgba(139, 69, 19, 0.3)'
        },

        '&:active': {
          transform: 'scale(0.95)'
        },

        '&, & *, & span, & svg': {
          color: '#ffffff !important',
          opacity: '1 !important'
        }
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default SimpleGlassButton