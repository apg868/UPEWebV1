import { HStack, VStack, Flex, Box, useBreakpointValue, Text } from "@chakra-ui/react";

function IntroBanner({ content }) {
    return (
        <Flex>
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "sm": "3xl", "md": "4xl", "lg": "5xl" }}>
                {content}
            </Text>
        </Flex>
    )
}

export default IntroBanner