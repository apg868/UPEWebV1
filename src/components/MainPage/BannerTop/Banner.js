import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";

function Banner(props) {
    // Add this CSS style to prevent horizontal scrolling
    document.body.style.overflowX = "hidden";

    return (
        <Flex
            bgImage={props.bannerImage}
            w={{base: "100vw"}}
            h={{ base: "50vh", md: "60vh" }}
            alignItems="flex-start"
            justifyContent="flex-start"
            padding="2em"
            backgroundRepeat="no-repeat"
            paddingLeft={{ "base": "1em", "md": "2em", "lg": "3em" }}
            paddingTop={{ "base": "2em", "md": "2em", "lg": "3em" }}
            // Add background position and size properties to the image
            backgroundPosition="center" // Center the image
            backgroundSize="cover" // Crop the sides while maintaining aspect ratio
        >
            <Box
                background="rgb(218,218,218,1)"
                borderRadius="1em"
                p={{ "base": "0.5em", "md": "0.5em", "lg": "0.5em" }}
            >
                {props.logo &&
                    <VStack spacing="0em">
                        <HStack spacing="0em">
                            <Text
                                fontFamily={"bannerFont"}
                                fontWeight="normal"
                                color="secondaryRed"
                                fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}
                            > Upsilon &nbsp;
                            </Text>
                            <Text
                                fontFamily={"bannerFont"}
                                fontWeight="normal"
                                color="white"
                                fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}
                            > Pi &nbsp;
                            </Text>
                            <Text
                                fontFamily={"bannerFont"}
                                fontWeight="normal"
                                color="secondaryRed"
                                fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}
                            > Epsilon
                            </Text>
                            Pi &nbsp; Epsilon
                        </HStack>
                        <Text
                            fontFamily={"bannerFont"}
                            fontWeight="light"
                            fontSize={{ "base": "2xs", "md": "xs", "lg": "md" }}>  Boston University Chapter
                        </Text>
                        <HStack spacing={{ "base": "4em", "md": "5em", "lg": "7em" }}>
                            <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}>Υ</Text>
                            <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}>Π</Text>
                            <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{ "base": "md", "md": "lg", "lg": "2xl" }}>Ε</Text>
                        </HStack>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Banner;
