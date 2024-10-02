import { useBreakpointValue, Text, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import CardFrame2 from "./MainPage/CardSect/CardFrame2";
import Banner from './MainPage/BannerTop/Banner';
// import bannerImage from '../assets_folder/aboutBanner.jpg';
import bannerImage from '../assets_folder/boston-2642188-scaled.jpg';

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    return (
        <>
            <Flex position="relative"> {/* Add relative positioning here */}
                <Banner bannerImage={bannerImage} />
                <Box
                    position="absolute" // Set to absolute positioning
                    top="30%" // Increase this value to move the box down
                    left="50%" // Center horizontally
                    transform="translate(-50%, -30%)" // Adjust transform to maintain centering
                    backgroundColor="rgba(185, 22, 22, 0.8)" // Semi-transparent background
                    borderRadius="8px" // Rounded corners
                    padding="2rem" // Padding inside the box
                    maxWidth="800px" // Maximum width of the box
                    color="white" // Text color
                >
                    <Text fontSize="xl" fontWeight="bold">
                        What is UPE?
                    </Text>
                    <Text fontSize="md" marginTop="1rem">
                        Upsilon Pi Epsilon (UPE) is a national honor society dedicated to fostering excellence in the fields of computing and information disciplines. At UPE BU Chapter, we are committed to enhancing the professional development of our members and cultivating their skills as computer scientists. We invite you to explore our core values outlined below.
                    </Text>
                </Box>
                
            </Flex>
             {/* About Us Box */}
            <Text 
                    marginTop="-30px" 
                    position="absolute" 
                    textAlign="center"
                    top="50%" 
                    left="50%" 
                    transform="translate(-50%, -50%)" 
                    fontSize={{ base: "8xl", md: "10xl", lg: "12xl" }}
                    fontWeight="bold" 
                    color="#ece7dc" // Change color as needed
                    textShadow="4px 4px 8px rgba(0, 0, 0, 0.5)"                >
                    UPE CORE VALUES
                </Text>
            {breakpoint === "base" 
                ? 
                <Flex 
                justifyContent="center" 
                margin="4rem"
                >
                    <VStack 
                    spacing="2em"
                    marginTop="90px" 
                    >
                        <CardFrame2 title="Make Computer Science Fun" description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving." />
                        <CardFrame2 title="Innovate Across Technical Sectors" description="while utilizing and contributing to new disruptive technologies. We will mentor one another and create impactful and relevant projects." />
                        <CardFrame2 title="Ensure Diversity of Thought" description="for successful and consistent innovation by modeling real work environments with many different kinds of people." />
                        <CardFrame2 title="Utilize and Provide New Resources" description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies." />
                        <CardFrame2 title="Transparency" description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make." />
                    </VStack>
                </Flex>
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
                </>
            }
        </>
    );
}

export default AboutUs;
