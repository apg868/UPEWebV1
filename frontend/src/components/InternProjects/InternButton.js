import { Text, Flex } from "@chakra-ui/react";

function InternBox() {
    return (
        <Flex justifyContent="center">
            <Flex
                color="primaryRed"
                fontFamily="bannerFont"
                fontWeight="semibold"
                textAlign="center"
                w={{"base":"16em","md":"40em", "lg":"50em"}}
                h={{"base":"5em","md":"5em", "lg":"5em"}}
                mb={{"base":"2em","md":"2em","lg":"2em"}}
                mt={{"base":"2em","md":"2em","lg":"2em"}}
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize={{"base":"2xl","md":"3xl","lg":"3xl"}} fontFamily="bannerFont"
                textAlign="center"
                wordWrap="break-word">Explore Our Featured Projects</Text>
            </Flex>
        </Flex>
    );
}

export default InternBox;
