import { HStack, VStack, Flex, Box, useBreakpointValue, Text } from "@chakra-ui/react";

function IntroBanner(){
    return(
        <Flex>
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{"sm":"3xl","md":"4xl","lg":"5xl"}}>
            Meet Our Current Members </Text>
        </Flex>
    )
}

export default IntroBanner