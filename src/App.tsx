import MainApp from './components/AppContainer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Box, Flex } from '@chakra-ui/react'

function App() {

  return (
    <Box bg='#FAFAFA'>
      <Flex
        flexDirection='column'
        justifyContent='space-between'
        maxWidth='1120px'
        mx='auto'
        minH='100vh'
        px={{ base: '16px', md: '40px' }}
      >
        <Box>
          <Header />
          <MainApp />
        </Box>
        <Footer />
      </Flex>
    </Box>
  )
}

export default App
