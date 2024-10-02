import React from "react";
import {
  VStack,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoWHITE from "./../assets_folder/logoWHITE.png";
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
      {/* get rid of image */}
      {/* <Image
        src={logoWHITE}
        width={["100px", "150px", "200px"]}
        height={["80px", "120px", "160px"]}
        opacity="60%"
        borderRadius={10}
      /> */}
      // Navigation Links
       <HStack spacing={9} align="center">
       <VStack spacing={2} align="flex-start">
        <Text
          color="black"
          fontFamily="secondaryFont"
          fontWeight="bold"
          fontSize="md"
        >
         {/* Navigation */}
        </Text>
        <Text
          fontFamily="secondaryFont"
          fontWeight="medium"
          fontSize="md"
          color="gray"
          _hover={{ textDecoration: "underline", textDecorationColor: "grey" }}
        >
          {/* <Link to="/">Home</Link> */}
        </Text>
        <Text
          fontFamily="secondaryFont"
          fontWeight="medium"
          fontSize="md"
          color="gray"
          _hover={{ textDecoration: "underline", textDecorationColor: "grey" }}
        >
          {/* <Link to="/members">Members</Link> */}
        </Text>
        <Text
          fontFamily="secondaryFont"
          fontWeight="medium"
          fontSize="md"
          color="gray"
          _hover={{ textDecoration: "underline", textDecorationColor: "grey" }}
        >
          {/* <Link to="/intern-projects">Highlights</Link> */}
        </Text>
        <Text
          fontFamily="primaryFont"
          fontWeight="medium"
          fontSize="md"
          color="gray"
          _hover={{ textDecoration: "underline", textDecorationColor: "grey" }}
        >
          {/* <Link to="/about-us">About Us</Link> */}
        </Text>
        <Text
          fontFamily="primaryFont"
          fontWeight="medium"
          fontSize="md"
          color="gray"
          _hover={{ textDecoration: "underline", textDecorationColor: "grey" }}
        >
          <Link to="https://github.com/sai-nayunipati/upe-bu-cs-major-guide">
            {/* UPE@BU C.S. Major Guide */}
          </Link>
        </Text>
      </VStack>
      <VStack spacing={2} align={["center", "center", "flex-start"]}>
        <Text
          color="black"
          fontFamily="secondaryFont"
          fontWeight="middle"
          fontSize="30px"
        >
          Connect with Us
        </Text>
        <div style={{ border: '1px solid #ccc', margin: '0.5em 0' }}></div>


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
