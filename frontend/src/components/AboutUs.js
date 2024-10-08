import { useBreakpointValue, Text, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import CardFrame2 from "./MainPage/CardSect/CardFrame2";
import Banner from './MainPage/BannerTop/Banner';
import bannerImage from '../assets_folder/boston-2642188-scaled.jpg';

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", sm: "sm", md: "md", lg: "lg" });

    return (
        <>
           <Flex position="relative" paddingBottom="30px">
            <Banner bannerImage={bannerImage} />
            <Box
                position="absolute"
                top={{ base: "40%", sm: "35%", lg: "30%" }} // More nuanced control across breakpoints
                left="50%"
                transform="translate(-50%, -30%)"
                backgroundColor="rgba(185, 22, 22, 0.8)"
                borderRadius="8px"
                padding={{ base: "1rem", sm: "1.5rem", md: "2rem" }} // Responsive padding for better spacing
                width={{ base: "90%", sm: "85%", md: "800px" }} // Increased width for mobile
                maxWidth={{ base: "90%", sm: "85%", md: "800px" }} // Responsive max width
                color="white"
                marginBottom="50px"
            >
                <Text fontSize={{ base: "lg", sm: "xl", lg: "2xl" }} fontWeight="bold"> {/* Adjusted font size for mobile */}
                    What is UPE?
                </Text>
                <Text fontSize={{ base: "sm", sm: "md", lg: "lg" }} marginTop="0.5rem" lineHeight={{ base: "1.5", sm: "1.6", lg: "1.8" }}> {/* Reduced font size and added line height */}
                    Upsilon Pi Epsilon (UPE) is a national honor society dedicated to fostering excellence in the fields of computing and information disciplines. At UPE BU Chapter, we are committed to enhancing the professional development of our members and cultivating their skills as computer scientists. We invite you to explore our core values outlined below.
                </Text>
            </Box>
        </Flex>
            
            <Text
                paddingTop="1em"
                textAlign="center"
                fontFamily="secondaryFont"
                color="#523a2a"
                fontWeight="bold"
                fontSize={{ sm: "3xl", md: "4xl", lg: "5xl" }}
            >
                UPE CORE VALUES
            </Text>

            {breakpoint === "base" || breakpoint === "sm" ? (
                <Flex marginBottom="3em" justifyContent="center" alignItems="center" margin={{ base: "1rem", md: "4rem" }} marginBottom={{ base: "0", md: "-70px" }} wrap="wrap">
                    <VStack spacing={{ base: "1em", md: "2em" }} width="100%" alignItems="center">
                        <CardFrame2
                            title="Make Computer Science Fun"
                            description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving."
                            width={{ base: "90%", md: "60%", lg: "auto" }}
                        />
                        <CardFrame2
                            title="Innovate Across Technical Sectors"
                            description="while utilizing and contributing to new disruptive technologies. We will mentor one another and create impactful and relevant projects."
                            width={{ base: "90%", md: "60%", lg: "auto" }}
                        />
                        <CardFrame2
                            title="Ensure Diversity of Thought"
                            description="for successful and consistent innovation by modeling real work environments with many different kinds of people."
                            width={{ base: "90%", md: "60%", lg: "auto" }}
                        />
                        <CardFrame2
                            title="Utilize and Provide New Resources"
                            description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies."
                            width={{ base: "90%", md: "60%", lg: "auto" }}
                        />
                        <CardFrame2
                            title="Transparency"
                            description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make."
                            width={{ base: "90%", md: "60%", lg: "auto" }}
                        />
                    </VStack>
                </Flex>
            ) : (
                <>
                    <Flex justifyContent="center" alignItems="center" margin={{ base: "1rem", md: "3rem" }} wrap="wrap">
                        <HStack spacing={{ base: "1em", md: "4em", lg: "4em" }} wrap="wrap" justifyContent="center" alignItems="center">
                            <CardFrame2
                                title="Make Computer Science Fun"
                                description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving."
                                width={{ base: "90%", md: "auto" }}
                            />
                            <CardFrame2
                                title="Innovate Across Technical Sectors"
                                description="while utilizing and contributing to new disruptive technologies. We will mentor one another and create impactful and relevant projects."
                                width={{ base: "90%", md: "auto" }}
                            />
                            <CardFrame2
                                title="Ensure Diversity of Thought"
                                description="for successful and consistent innovation by modeling real work environments with many different kinds of people."
                                width={{ base: "90%", md: "auto" }}
                            />
                        </HStack>
                    </Flex>

                    <Flex justifyContent="center" alignItems="center" margin={{ base: "1rem", md: "3rem" }} wrap="wrap">
                        <HStack spacing={{ base: "1em", md: "4em", lg: "4em" }} wrap="wrap" justifyContent="center" alignItems="center">
                            <CardFrame2
                                title="Utilize and Provide New Resources"
                                description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies."
                                width={{ base: "90%", md: "auto" }}
                            />
                            <CardFrame2
                                title="Transparency"
                                description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make."
                                width={{ base: "90%", md: "auto" }}
                            />
                        </HStack>
                    </Flex>
                </>
            )}
        </>
    );
}

export default AboutUs;
