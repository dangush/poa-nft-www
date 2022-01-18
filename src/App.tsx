import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Heading,
  Text,
  theme,
  useColorMode,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import Page from './components/Page'

const App = () => (
  <ChakraProvider theme={theme}>
    <Inner />
  </ChakraProvider>
)

const Inner: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode()

  useEffect(() => {
    if (colorMode === 'light') setColorMode('dark')
  }, [colorMode, setColorMode])

  return (
    <Box>
      <Page text="Connect your wallet">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Step 1
        </Text>
        <Button size="lg">Connect your wallet</Button>
      </Page>
      <Page>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Step 2
        </Text>
        <Button size="lg">Switch to the Matic network</Button>
        <Text>or</Text>
        <Button size="lg">Add the Matic network</Button>
      </Page>
      <Page>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Step 3
        </Text>
        <Button size="lg">Mint Your Attendance NFT</Button>
      </Page>
      <Page>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Step 4
        </Text>
        <Button size="lg">Look at your NFT on Opensea</Button>
      </Page>
    </Box>
  )
}

export default App
