import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";

function BannerTransition(props) {
    return (
        <Flex
            position="relative"
            top="0"
            right="0"
            bottom="0"
            left="0"
            transform="translateY(-50%)"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                bg="primaryRed"
                w={{"base":"30em","md":"60em","lg":"90em"}}
                borderRadius="2em"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    fontSize={{ "base": "lg", "md": "2xl", "lg": "4xl" }}
                    fontFamily="secondaryFont"
                    color="white"
                    fontWeight="normal"
                >
                    {props.text}
                </Text>
            </Flex>
        </Flex>
    )
}

export default BannerTransition
