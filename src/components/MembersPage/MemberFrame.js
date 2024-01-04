import { Flex, Text, Image, VStack } from "@chakra-ui/react";

function MemberFrame({ student, image }) {
    const name = student.name;
    const title = student.title
    const major = student.major
    const college = student.college
    const year = student.year

    return (
        <Flex bg="primaryGray" w="20rem" h="25rem" p="1rem"
            justifyContent="center" >
            <VStack spacing="0.2rem">
                <Image src={image} w="19rem" height="21rem" position="relative" />
                <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
                    <Text fontFamily="bannerFont" fontSize="md"> {title}: {name} </Text>
                    <Text fontFamily="bannerFont" fontSize="md"> {college} {major} </Text>
                    <Text fontFamily="bannerFont" fontSize="md"> Class of {year} </Text>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default MemberFrame