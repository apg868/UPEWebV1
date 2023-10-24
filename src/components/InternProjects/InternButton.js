import { Text, Flex } from "@chakra-ui/react";

function InternBox() {
    return (
        <Flex justifyContent="center" w="60%">
            <Flex
                backgroundColor="primaryRed"
                color="white"
                fontFamily="bannerFont"
                w={{"base":"60vw","md":"40vw", "lg":"30vw"}}
                h="3em"
                opacity="0.8"
                borderRadius="0.5em"
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize="xl" fontFamily="secondaryFont">Our Intern Projects</Text>
            </Flex>
        </Flex>
    );
}

export default InternBox;
