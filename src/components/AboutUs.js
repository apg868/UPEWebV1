import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";
import CardFrame2 from "./MainPage/CardSect/CardFrame2";
import Banner from './MainPage/BannerTop/Banner';
import bannerImage from '../assets_folder/aboutBanner.jpg';
import BannerTransition2 from "../components/MainPage/BannerTransition/BannerTransition2.js"

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    return (
        <>
            <Banner bannerImage={bannerImage}/>
            <BannerTransition2 text="We are Boston University's chapter of Upsilon Pi Epsilon, a national honor society that promotes excellence in the computing and information disciplines. We strive to make our members better professionals and computer scientists. We invite you to explore our core values below." />
            {breakpoint === "base"
                ?
                <>
                    <Flex justifyContent="center" margin="2rem">
                        <VStack spacing="2em">
                            <CardFrame2 title="Make Computer Science Fun" description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving." />
                            <CardFrame2 title="Innovate Across Technical Sectors" description="while utilizing and contributing to new disruptive technologies. We will mentor one another and create impactful and relevant projects." />
                            <CardFrame2 title="Ensure Diversity of Thought" description="for successful and consistent innovation by modeling real work environments with many different kinds of people." />
                        </VStack>
                    </Flex>
                    <Flex justifyContent="center" margin="2rem">
                        <VStack spacing="2em">
                            <CardFrame2 title="Utilize and Provide New Resources" description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies." />
                            <CardFrame2 title="Transparency" description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make." />
                        </VStack>
                    </Flex>
                </>
                :
                <>
                    <Flex justifyContent="center" margin="3rem">
                        <HStack spacing={{ "sm": "1em", "md": "4em", "lg": "4em" }}>
                            <CardFrame2 title="Make Computer Science Fun" description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving." />
                            <CardFrame2 title="Innovate Across Technical Sectors" description="while utilizing and contributing to new disruptive technologies. We will mentor one another and create impactful and relevant projects." />
                            <CardFrame2 title="Ensure Diversity of Thought" description="for successful and consistent innovation by modeling real work environments with many different kinds of people." />
                        </HStack>
                    </Flex>
                    <Flex justifyContent="center" margin="3rem">
                        <HStack spacing={{ "sm": "1em", "md": "4em", "lg": "4em" }}>
                        <CardFrame2 title="Utilize and Provide New Resources" description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies." />
                            <CardFrame2 title="Transparency" description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make." />
                        </HStack>
                    </Flex>
                </>}
        </>

    )
};

export default AboutUs;