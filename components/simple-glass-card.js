import { Box, Heading, Text } from '@chakra-ui/react'

const SimpleGlassCard = ({ 
  children, 
  title, 
  description, 
  width = "300px", 
  height = "200px",
  onClick,
  href,
  ...props 
}) => {
  const cardContent = (
    <>
      {title && (
        <Heading
          as="h3"
          size="lg"
          margin="0 0 10px 0"
          fontWeight="700"
          color="#ffffff"
          textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
          opacity="1"
        >
          {title}
        </Heading>
      )}
      {description && (
        <Text 
          margin="0" 
          opacity="1"
          color="#ffffff"
          fontWeight="500"
          textShadow="0 2px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(139, 69, 19, 1), 0 0 2px rgba(0,0,0,1)"
        >
          {description}
        </Text>
      )}
      {children}
    </>
  )

  return (
    <Box
      className="simple-glass-card"
      position="relative"
      width={width}
      height={height}
      borderRadius="20px"
      overflow="hidden"
      cursor={onClick || href ? "pointer" : "default"}
      onClick={onClick}
      as={href ? "a" : "div"}
      href={href}
      target={href ? "_blank" : undefined}
      sx={{
        background: 'rgba(139, 69, 19, 0.4)',
        backdropFilter: 'blur(8px) saturate(150%) brightness(1.2)',
        boxShadow: 'inset 1px 1px 1px rgba(244, 164, 96, 0.4), 0 6px 24px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(244, 164, 96, 0.3)',
        
        '&, & *, & h3, & p': {
          color: '#ffffff !important',
          opacity: '1 !important'
        },
        
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 'inset 1px 1px 1px rgba(244, 164, 96, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3)'
        },

        '@media (prefers-color-scheme: dark)': {
          background: 'rgba(101, 67, 33, 0.5)',
          border: '1px solid rgba(222, 184, 135, 0.3)'
        }
      }}
      {...props}
    >
      <Box
        position="relative"
        zIndex="10"
        padding="20px"
        color="#ffffff"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        {cardContent}
      </Box>
    </Box>
  )
}

export default SimpleGlassCard