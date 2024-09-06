import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- Import this
import themeProv from "./theme";
import NavBar from "./components/NavBar/Nav";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer.js";
import InternProjects from "./components/InternProjects/InternProjects";
import AboutUs from "./components/AboutUs";
import MembersPage from "./components/MembersPage/MembersPage.js";

function App() {
  return (
    <ChakraProvider theme={themeProv}>
      <HashRouter>
        <>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/members" element={<MembersPage />} />
            <Route exact path="/intern-projects" element={<InternProjects />} />
            <Route exact path="/about-us" element={<AboutUs />} />
          </Routes>

          <Footer />
        </>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
