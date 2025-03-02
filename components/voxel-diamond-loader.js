import { forwardRef } from 'react'
import { Box, Flex, keyframes } from '@chakra-ui/react'

// Create pulsing eye animation to match the robot's blue eyes
const eyePulse = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`

// Create subtle hover animation for the robot
const robotHover = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`

export const RoboSpinner = () => (
  <Flex
    position="absolute"
    left="50%"
    top="50%"
    transform="translate(-50%, -50%)"
    width="80px"
    height="80px"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    animation={`${robotHover} 2s infinite ease-in-out`}
  >
    {/* Robot body - yellow/gold color to match the model */}
    <Box
      width="60px"
      height="60px"
      borderRadius="50%"
      backgroundColor="#FFC857"
      position="relative"
      boxShadow="0 0 15px rgba(0,0,0,0.2)"
    >
      {/* Robot face plate - gray circle */}
      <Box
        position="absolute"
        width="30px"
        height="30px"
        borderRadius="50%"
        backgroundColor="#B0BEC5"
        top="15px"
        left="15px"
        zIndex="1"
      >
        {/* Robot eyes - cyan to match the model's glowing eyes */}
        <Flex justifyContent="center" alignItems="center" height="100%">
          <Box
            width="6px"
            height="12px"
            backgroundColor="#5CCEFF"
            borderRadius="2px"
            marginRight="5px"
            animation={`${eyePulse} 1.5s infinite`}
          />
          <Box
            width="6px"
            height="12px"
            backgroundColor="#5CCEFF"
            borderRadius="2px"
            animation={`${eyePulse} 1.5s infinite`}
          />
        </Flex>
      </Box>
    </Box>

    {/* Robot ears/antennae */}
    <Flex width="100%" justifyContent="space-between" position="absolute" top="-5px">
      <Box
        width="15px"
        height="25px"
        backgroundColor="#FFC857"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        transform="rotate(-10deg)"
      />
      <Box
        width="15px"
        height="25px"
        backgroundColor="#FFC857"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        transform="rotate(10deg)"
      />
    </Flex>

    {/* Loading text */}
    <Box
      marginTop="15px"
      color="white"
      fontSize="12px"
      fontWeight="bold"
    >
      LOADING...
    </Box>
  </Flex>
)

export const RoboContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-robot"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <RoboContainer>
      <RoboSpinner />
    </RoboContainer>
  )
}

export default Loader
