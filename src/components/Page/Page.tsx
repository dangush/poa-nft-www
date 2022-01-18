import { Box, Center, Flex, Text } from '@chakra-ui/react'

interface PageProps {
  text?: string
}

const Page: React.FC<PageProps> = ({ children, text }) => {
  return (
    <Flex>
      <Center
        backgroundColor="black"
        flex={1}
        height="100vh"
        textAlign="center"
      >
        <Box>{children}</Box>
      </Center>
      <Center flex={1}>
        <Box>
          <Text>{text}</Text>
        </Box>
      </Center>
    </Flex>
  )
}

export default Page
