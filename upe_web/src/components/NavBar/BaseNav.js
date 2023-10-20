import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import logomain from './../../assets_folder/logoWHITE.png';;


function BaseNav() {
  return (
    <Flex position="sticky" top={0} left={0} right={0} bg={['primaryRed', 'secondaryRed', 'primaryGray', 'secondaryRed', 'primaryRed']} w='100%' h="10vh" zIndex={1}>
      <HStack spacing={['7', '8', '9','100']} paddingLeft={["0vw", "20vw", "25vw", "40vw"]}>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> hello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> cello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> fellow</Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> mellow </Text>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
