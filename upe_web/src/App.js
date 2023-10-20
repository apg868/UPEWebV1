import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import themeProv from './theme'


function App() {
  return (
    <ChakraProvider theme={themeProv}>
      <NavBar/>
    </ChakraProvider>
  );
}

export default App;
