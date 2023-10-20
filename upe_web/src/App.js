import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import themeProv from './theme'
import NavBar from './components/NavBar/Nav'


function App() {
  return (
    // Test comment
    <ChakraProvider theme={themeProv}>
      <NavBar/>
    </ChakraProvider>
  );
}

export default App;
