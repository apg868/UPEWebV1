import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'; // <-- Import this
import themeProv from './theme';
import NavBar from './components/NavBar/Nav';

function App() {
  return (
    <ChakraProvider theme={themeProv}>
      <BrowserRouter> {/* <-- Add this */}
        <NavBar/>
      </BrowserRouter> {/* <-- Add this */}
    </ChakraProvider>
  );
}

export default App;
