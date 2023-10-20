import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import logoRED from './../../assets_folder/logoRED.png';
import { createBreakpoints } from '@chakra-ui/theme-tools';


const breakpoints = createBreakpoints({
  sm: '360px',
  md: '600px',
  lg: '1079px',
  xl: '1440px',
});


function BaseNav() {
  return (
    <Flex position="sticky" top={0} left={0} right={0} bg={{"md": "primaryGray"}} w='100%' h="9vh" zIndex={1}>
      <HStack spacing={{"md":"3em","lg":"15em"}}>
        <Image src={logoRED} boxSize="9vh" borderRadius="4em"/>
      <HStack spacing={{"md": "6em", "lg": "7em"}} paddingLeft={{"md": "3em", "lg": "4em"}}>
        <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1}> Home </Text>
        <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1}> Members </Text>
        <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1}> Intern Projects </Text>
        <Text fontFamily="primaryFont" fontWeight="thin" fontSize={{"md": "xl","lg":"2xl"}} pt={1}> About Us </Text>
      </HStack>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
