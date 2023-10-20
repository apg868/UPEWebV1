import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import logomain from './../../assets_folder/logoWHITE.png';;


function BaseNav() {
  return (
    <Flex position="sticky" top={0} left={0} right={0} bg='primaryRed' w='100%' h="10vh" zIndex={1}>
      <HStack spacing={7} paddingLeft={["5vw", "20vw"]}>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl']} pt={1}> hello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl']} pt={1}> cello </Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl']} pt={1}> fellow</Text>
        <Text fontFamily="primaryFont" fontWeight="normal" fontSize={['md', 'xl']} pt={1}> mellow </Text>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
