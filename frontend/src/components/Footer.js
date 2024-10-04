import React from "react";
import {
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <Stack
      direction={["column", "column", "row"]} // Adjust the layout based on screen size
      spacing={[4, 4, "8rem"]}
      // marginTop={["8rem", "10rem", "12rem"]}
      height="auto" // Adjust height for mobile responsiveness
      width="100%"
      margin="auto"
      bgColor= "#ece7dc"
      justifyContent="center"
      p={[4, 8]} // Padding adjustments for different screen sizes
      // borderRadius="10px"
      px={{ base: "2em", md: "4em" }}
      // mx={{ base: "2em", md: "4em" }}             
      alignItems={["center", "center", "flex-start"]} // Center align items only in mobile state
    >
      // Navigation Links
       <HStack spacing={9} align="center">
      <VStack spacing={2} align={["center", "center", "flex-start"]}>
        <Text
          color="black"
          fontFamily="secondaryFont"
          fontWeight="middle"
          fontSize="30px"
          textAlign="center"
        >
          Connect with Us
        </Text>      
        {/* instagram icon - attach link */}
    
        <HStack spacing={4} align="center">
        <ChakraLink href="https://instagram.com/upebu" isExternal>
        <Icon as={FaInstagram} boxSize="30px" />
      </ChakraLink>
      <HStack spacing={4} align="center">
          <ChakraLink href="https://www.facebook.com/upeatbu/">
          <Icon as={FaFacebook} boxSize="30px" />
          </ChakraLink>
          <HStack spacing={4} align="center">
        <ChakraLink href="https://x.com/bu_upe" isExternal>
        <Icon as={FaTwitter} boxSize="30px" />
      </ChakraLink>
      </HStack>
      <HStack spacing={4} align="center">
        <ChakraLink href="https://www.linkedin.com/company/buupe/" isExternal>
        <Icon as={FaLinkedin} boxSize="30px" />
      </ChakraLink>
      </HStack>
      <HStack spacing={4} align="center">
        <ChakraLink href="mailto:upatbu@gmail.com" isExternal>
        <Icon as={FaEnvelope} boxSize="30px" />
        </ChakraLink>
        <div style={{ border: '1px solid #ccc', margin: '0.5em 0' }}></div>

      </HStack>
      </HStack>
  </HStack>
      </VStack>
      </HStack>
    </Stack>
  );
}

export default Footer;
