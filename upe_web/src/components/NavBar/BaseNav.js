import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import logomain from './../../assets_folder/logoWHITE.png';;


function BaseNav() {
  return (
    <Flex position="sticky" top={0} left={0} right={0} bg={['primaryRed', 'secondaryRed', 'primaryGray', 'secondaryRed', 'primaryRed']} w='100%' h="10vh" zIndex={1}>
      <HStack spacing={['7', '10', '7em', '8em', '9em']} paddingLeft={["0vw", "15em", "10em", "15em", "21em"]}>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> hello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> cello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> fellow</Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl', '2xl', '3xl', '4xl']} pt={1}> mellow </Text>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
