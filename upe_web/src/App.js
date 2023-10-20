import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; // <-- Import this
import themeProv from './theme';
import NavBar from './components/NavBar/Nav';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <ChakraProvider theme={themeProv}>
      <BrowserRouter> {/* <-- Add this */}
      <>
        <NavBar/>

        <Routes>
        <Route exact path="/" element={<MainPage />} />
        </Routes>
        </>
      </BrowserRouter> {/* <-- Add this */}
    </ChakraProvider>
  );
}

export default App;
