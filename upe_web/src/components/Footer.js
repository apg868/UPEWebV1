import React from "react";
import { VStack, HStack, Image, Text, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logoWHITE from "./../assets_folder/logoWHITE.png"
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Footer() {
    return (
        <HStack marginTop="3rem" height="300px" width="100vw" bgColor="rgba(189, 195, 199, 0.3)" borderColor="rgba(189,195,199)" spacing={40} justifyContent="center">
            <Image src={logoWHITE} width="200px" height="160px" opacity="60%" borderRadius={10} />
            <VStack spacing={2}>
                <Text color="gray" fontFamily="secondaryFont" fontWeight="bold" fontSize="md"> Navigation</Text>
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
            <VStack>
                <Text color="gray" fontFamily="secondaryFont" fontWeight="bold" fontSize="md"> Connect with us on social media! </Text>
                <HStack spacing={1}>
                    <ChakraLink href="https://instagram.com/upebu" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md"> Instagram </ChakraLink>
                    <Icon as={FaInstagram} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://www.facebook.com/upeatbu/" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md"> Facebook </ChakraLink>
                    <Icon as={FaFacebook} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://x.com/bu_upe" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md"> Twitter </ChakraLink>
                    <Icon as={FaTwitter} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="https://www.linkedin.com/company/buupe/" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md"> LinkedIn </ChakraLink>
                    <Icon as={FaLinkedin} boxSize="15px" />
                </HStack>
                <HStack spacing={1}>
                    <ChakraLink href="mailto:upatbu@gmail.com" color="gray" fontFamily="primaryFont" fontWeight="bold" fontSize="md"> Email </ChakraLink>
                    <Icon as={FaEnvelope} boxSize="15px" />
                </HStack>
            </VStack>


        </HStack>

    )
}

export default Footer;