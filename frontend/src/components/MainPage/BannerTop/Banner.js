import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";

function Banner(props) {
    // Add this CSS style to prevent horizontal scrolling
    document.body.style.overflowX = "hidden";

    return (
        <Flex
            bgImage={props.bannerImage}
            w="100%" // Set width to 100% to cover the entire width of the parent
            h={{ base: "80vh", md: "70vh", lg: "60vh" }}
            alignItems="flex-start"
            justifyContent="flex-start"
            p={{ base: "1em", md: "1.5em", lg: "2em" }}
            backgroundRepeat="no-repeat"
            paddingLeft={{ base: "1em", md: "2em", lg: "3em" }}
            paddingTop={{ base: "2em", md: "2em", lg: "3em" }}
            pb={{ base: "1em", md: "2em", lg: "3em" }}
            backgroundPosition="center" // Center the image
            backgroundSize="cover" // Crop the sides while maintaining aspect ratio
        >
            {/* Content goes here */}
            <Box
                background="#fbf5e9"
            >
                {props.logo &&
                    <VStack spacing="0em">
                        <HStack spacing="2em">
                        </HStack>
                    </VStack>
                }
            </Box>
        </Flex>
    )
}

export default Banner;
