import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";

function BannerTransition(){
    return(
        <Flex bg="primaryRed" w="90vw" marginLeft="5vw" marginRight="5vw" position="relative" transform="translateY(-50%)"
        borderRadius="2em"justifyContent="center" alignItems="center">
            <Text fontSize={{"base":"lg","md":"2xl","lg":"4xl"}}
            fontFamily="bannerFont" color="white" fontWeight="normal">
            What UPE has to offer</Text>
        </Flex>
    )
}

export default BannerTransition