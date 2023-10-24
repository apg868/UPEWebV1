import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <-- Import this
import themeProv from './theme';
import NavBar from './components/NavBar/Nav';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer.js';
import MembersPage from './components/MembersPage/MembersPage';
import InternProjects from './components/InternProjects/InternProjects';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <ChakraProvider theme={themeProv}>
      <BrowserRouter> {/* <-- Add this */}
        <>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/members" element={<MembersPage/>} />
            <Route exact path="/intern-projects" element={<InternProjects/>} />
            <Route exact path="/about-us" element={<AboutUs/>} />
          </Routes>

          <Footer />
        </>
      </BrowserRouter> {/* <-- Add this */}
    </ChakraProvider>
  );
}

export default App;
