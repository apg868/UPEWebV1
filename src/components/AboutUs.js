import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";
import CardFrame from "./MainPage/CardSect/CardFrame";

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    return (
        breakpoint === "base"
            ?
            <>
            <Flex justifyContent="center" margin="2rem">
                <VStack spacing="2em">
                    <CardFrame title="Develop Your Network" description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." />
                    <CardFrame title="Gain Marketable Experience" description="Build your development skills by making real contributions to chapter projects." />
                    <CardFrame title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
                </VStack>
            </Flex>
            <Flex justifyContent="center" margin="2rem">
                <VStack spacing="2em">
                    <CardFrame title="Develop Your Network" description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." />
                    <CardFrame title="Gain Marketable Experience" description="Build your development skills by making real contributions to chapter projects." />
                    <CardFrame title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
                </VStack>
            </Flex>
            </>
            :
            <>
            <Flex justifyContent="center" margin="3rem">
                <HStack spacing={{ "sm": "1em", "md": "4em", "lg": "4em" }}>
                    <CardFrame title="Develop Your Network" description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." />
                    <CardFrame title="Gain Marketable Experience" description="Build your development skills by making real contributions to chapter projects." />
                    <CardFrame title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
                </HStack>
            </Flex>
            <Flex justifyContent="center" margin="3rem">
                <HStack spacing={{ "sm": "1em", "md": "4em", "lg": "4em" }}>
                    <CardFrame title="Develop Your Network" description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." />
                    <CardFrame title="Gain Marketable Experience" description="Build your development skills by making real contributions to chapter projects." />
                    <CardFrame title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
                </HStack>
            </Flex>
            </>
        )
};

export default AboutUs;