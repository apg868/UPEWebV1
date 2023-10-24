import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";
import CardFrame from "./MainPage/CardSect/CardFrame";
import Banner from './MainPage/BannerTop/Banner';
import bannerImage from '../assets_folder/aboutBanner.jpg';
import BannerTransition2 from "../components/MainPage/BannerTransition/BannerTransition2.js"

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    return (
        <>
            <Banner bannerImage={bannerImage}/>
            <BannerTransition2 text="We are Boston University's chapter of Upsilon Pi Epsilon, a national honor society that promotes excellence in the computing and information disciplines. We strive to make our members better professionals and computer scientists." />
            {breakpoint === "base"
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
                            <CardFrame title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
                        </HStack>
                    </Flex>
                </>}
        </>

    )
};

export default AboutUs;