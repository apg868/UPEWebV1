import { Text, Flex } from "@chakra-ui/react";

function InternBox() {
    return (
        <Flex justifyContent="center" w="60%">
            <Flex
                color="primaryRed"
                fontFamily="bannerFont"
                w={{"base":"20em","md":"30em", "lg":"50em"}}
                h={{"base":"10em","md":"30em", "lg":"3em"}}
                mb={{"base":"2em","md":"2em","lg":"2em"}}
                mt={{"base":"2em","md":"2em","lg":"2em"}}
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize={{"base":"xl","md":"2xl","lg":"3xl"}} fontFamily="bannerFont">See Some of Our Highlighted Projects Below</Text>
            </Flex>
        </Flex>
    );
}

export default InternBox;
