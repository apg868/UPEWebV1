import React from "react";
import {
  VStack,
  HStack,
  Text,
  Link as ChakraLink,
  Icon,
  Stack,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <Stack
      direction={{ base: "column", md: "column", lg: "row" }} // Adjust layout for mobile, small, and large screens
      spacing={{ base: 4, md: 6, lg: "8rem" }} // Responsive spacing
      height="auto"
      width="100%"
      margin="auto"
      bgColor="#ece7dc"
      justifyContent="center"
      p={{ base: 4, md: 6, lg: 8 }} // Padding adjustments for different screen sizes
      alignItems={{ base: "center", md: "center", lg: "flex-start" }} // Center align items for mobile and small screens
    >
      <VStack spacing={2} align="center">
        <Text
          color="black"
          fontFamily="secondaryFont"
          fontWeight="medium" // Adjusted for correct value
          fontSize={{ base: "15px", md: "22px", lg: "25px" }} // Responsive font size
          textAlign="center"
        >
          CONNECT WITH US
        </Text>
        
        {/* Social icons */}
        <HStack spacing={{ base: 4, md: 6 }} justifyContent="center" alignItems="center">
          <ChakraLink href="https://instagram.com/upebu" isExternal>
            <Icon as={FaInstagram} boxSize={{ base: "24px", md: "30px" }} />
          </ChakraLink>

          <ChakraLink href="https://www.linkedin.com/company/buupe/" isExternal>
            <Icon as={FaLinkedin} boxSize={{ base: "24px", md: "30px" }} />
          </ChakraLink>

          <ChakraLink href="mailto:upatbu@gmail.com" isExternal>
            <Icon as={FaEnvelope} boxSize={{ base: "24px", md: "30px" }} />
          </ChakraLink>
        </HStack>
      </VStack>
    </Stack>
  );
}

export default Footer;
