import { Box, Link, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Text>&copy; {new Date().getFullYear()} Florin Stefanescu. All Rights Reserved.</Text>
      <Flex justify="center" mt={2}>
        <Text>
          Template designed by{' '}
          <Link href="https://www.craftz.dog/" target="_blank" color="teal.500">
            Takuya Matsuyama
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
