import React from "react";
import { VStack, HStack, Image, Text, Link as ChakraLink, Icon, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoWHITE from "./../assets_folder/logoWHITE.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <Stack
            direction={["column", "column", "row"]} // Adjust the layout based on screen size
            spacing={[4, 4, "10rem"]}
            marginTop="3rem"
            height="auto" // Adjust height for mobile responsiveness
            width="100%"
            bgColor="rgba(189, 195, 199, 0.3)"
            borderColor="rgba(189, 195, 199)"
            justifyContent="center"
            p={[4, 8]} // Padding adjustments for different screen sizes
            borderRadius="10px"
            alignItems={["center", "center", "flex-start"]} // Center align items only in mobile state
        >
            <Image src={logoWHITE} width={["100px", "150px", "200px"]} height={["80px", "120px", "160px"]} opacity="60%" borderRadius={10} />
            <VStack spacing={2} align={["center", "center", "flex-start"]}>
                <Text color="gray" fontFamily="secondaryFont" fontWeight="bold" fontSize="md">
                    Navigation
                </Text>
                <Text fontFamily="primaryFont" fontWeight="medium" fontSize="md" color="gray">
                    <Link to="/">Home</Link>
                </Text>
                <Text fontFamily="primaryFont" fontWeight="medium" fontSize="md" color="gray">
                    <Link to="/members">Members</Link>
                </Text>
                <Text fontFamily="primaryFont" fontWeight="medium" fontSize="md" color="gray">
                    <Link to="/intern-projects">Intern Projects</Link>
                </Text>
                <Text fontFamily="primaryFont" fontWeight="medium" fontSize="md" color="gray">
                    <Link to="/about-us">About Us</Link>
                </Text>
            </VStack>
            <VStack align="center">
                <Text color="gray" fontFamily="secondaryFont" fontWeight="bold" fontSize="md">
                    Connect with us on social media!
                </Text>
                <HStack spacing={1}>
                    <ChakraLink href="https://instagram.com/upebu" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md">
                        Instagram
                    </ChakraLink>
                    <Icon as={FaInstagram} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://www.facebook.com/upeatbu/" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md">
                        Facebook
                    </ChakraLink>
                    <Icon as={FaFacebook} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://x.com/bu_upe" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md">
                        Twitter
                    </ChakraLink>
                    <Icon as={FaTwitter} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://www.linkedin.com/company/buupe/" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md">
                        LinkedIn
                    </ChakraLink>
                    <Icon as={FaLinkedin} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="mailto:upatbu@gmail.com" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md">
                        Email
                    </ChakraLink>
                    <Icon as={FaEnvelope} boxSize="15px" />
                </HStack>
            </VStack>
        </Stack>
    );
}

export default Footer;
