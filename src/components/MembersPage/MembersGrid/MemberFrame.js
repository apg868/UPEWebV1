import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";

function MemberFrame(props){
    const image = props.image
    const name= props.name
    const title = props.title
    const major = props.major
    const collegeandyear = props.collegeandyear

    return(
        <Flex bg="primaryGray" w="20rem" h="25rem" p="1rem"
        justifyContent="center" >
            <VStack spacing="0.2rem">
            <Image src={image} w="19rem" height="21rem" position="relative" />
            <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
                <Text fontFamily="bannerFont" fontSize="md"> {title}: {name} </Text>
                <Text fontFamily="bannerFont" fontSize="md"> {major}, {collegeandyear} </Text>
            </VStack>
            </VStack>

        </Flex>
    )
}

export default MemberFrame