import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import logoRED from './../../assets_folder/logoRED.png';

function BaseNav() {
  return (
    <Flex position="sticky" top={0} left={0} right={0} bg={{"md": "primaryGray"}} w='100%' h="9vh" zIndex={1}>
      <HStack spacing={{"md":"3em","lg":"15em"}}>
        <Image src={logoRED} boxSize="9vh" borderRadius="4em"/>
        <HStack spacing={{"md": "6em", "lg": "7em"}} paddingLeft={{"md": "3em", "lg": "4em"}}>
          <Link to="/">
            <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1} 
                  _hover={{ color: "primaryRed"}}>
              Home
            </Text>
          </Link>
          <Link to="/members">
            <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1} 
                  _hover={{ color: "primaryRed"}}>
              Members
            </Text>
          </Link>
          <Link to="/intern-projects">
            <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1} 
                  _hover={{ color: "primaryRed"}}>
              Intern Projects
            </Text>
          </Link>
          <Link to="/about-us">
            <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1} 
                  _hover={{ color: "primaryRed"}}>
              About Us
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
