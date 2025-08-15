import { Box } from '@chakra-ui/react'

const AnimatedSandBackground = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="-1"
      overflow="hidden"
    >
      {/* Multiple sand layers for parallax effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="120%"
        height="120%"
        backgroundImage="url('/images/sand1.jpeg')"
        backgroundSize="400px 400px"
        backgroundRepeat="repeat"
        opacity="0.8"
        sx={{
          animation: 'sandMove1 20s infinite linear',
          '@keyframes sandMove1': {
            '0%': { transform: 'translate(0, 0)' },
            '100%': { transform: 'translate(-100px, -100px)' }
          }
        }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        width="120%"
        height="120%"
        backgroundImage="url('/images/sand.jpeg')"
        backgroundSize="600px 600px"
        backgroundRepeat="repeat"
        opacity="0.4"
        sx={{
          animation: 'sandMove2 30s infinite linear reverse',
          '@keyframes sandMove2': {
            '0%': { transform: 'translate(0, 0) scale(1.1)' },
            '100%': { transform: 'translate(80px, 80px) scale(1.1)' }
          }
        }}
      />

      <Box
        position="absolute"
        top="0"
        left="0"
        width="120%"
        height="120%"
        backgroundImage="url('/images/sand1.jpeg')"
        backgroundSize="800px 800px"
        backgroundRepeat="repeat"
        opacity="0.2"
        sx={{
          animation: 'sandMove3 40s infinite linear',
          '@keyframes sandMove3': {
            '0%': { transform: 'translate(0, 0) scale(0.9)' },
            '100%': { transform: 'translate(-60px, 60px) scale(0.9)' }
          }
        }}
      />

      {/* Overlay gradient for better glass effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background="linear-gradient(45deg, rgba(194, 154, 108, 0.1) 0%, rgba(218, 165, 32, 0.05) 50%, rgba(244, 164, 96, 0.1) 100%)"
        sx={{
          animation: 'gradientShift 15s infinite ease-in-out',
          '@keyframes gradientShift': {
            '0%': { filter: 'hue-rotate(0deg)' },
            '50%': { filter: 'hue-rotate(10deg)' },
            '100%': { filter: 'hue-rotate(0deg)' }
          }
        }}
      />
    </Box>
  )
}

export default AnimatedSandBackground
