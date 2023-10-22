import { HStack, VStack, Flex, Box, useBreakpointValue, Text } from "@chakra-ui/react";

function IntroBanner(){
    return(
        <Flex>
            <Text fontFamily="primaryFont" fontWeight="light" fontSize={{"sm":"3xl","md":"4xl","lg":"5xl"}}>
            Meet some of our current members </Text>
        </Flex>
    )
}

export default IntroBanner