import { HStack, VStack, Flex, Box, useBreakpointValue, Text } from "@chakra-ui/react";

function IntroBanner({ content }) {
    return (
        <Flex>
            <Text padding="4" textAlign="center" fontFamily="secondaryFont" color="#523a2a" fontWeight="bold" fontSize={{ "sm": "3xl", "md": "4xl", "lg": "5xl" }}>
                {content}
            </Text>
        </Flex>
    )
}

export default IntroBanner