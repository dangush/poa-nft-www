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


  //TODO Make these into components with images and formatted text.
  const firstText = "Let's get started by connecting your wallet.\nInstall the MetaMask browser extension, and open it on this website."
  const secondText = "Now, we need to make your wallet connect with the Polygon network instead of Ethereum.\n Go to polygonscan.com, scroll all the way to the bottom, and click the 'Add to MetaMask' button."
  const thirdText = "You're now ready to mint!.\n Click the button to mint, and MetaMask will prompt you to sign the transaction. These NFTs are free, so you should only pay for the gas fees needed."
  
  return (
    <Box>
      <Page text={firstText}>
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
      <Page text={secondText}>
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
      <Page text={thirdText}>
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
