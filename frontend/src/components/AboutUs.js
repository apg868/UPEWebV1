import { useBreakpointValue, Text, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import CardFrame2 from "./MainPage/CardSect/CardFrame2";
import Banner from './MainPage/BannerTop/Banner';
import bannerImage from '../assets_folder/boston-2642188-scaled.jpg';

function AboutUs() {
    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    return (
        <>
            <Flex position="relative"
            paddingBottom="30px"
            > {/* Add relative positioning here */}
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
                    marginBottom="50px"
                >
                    <Text fontSize="2xl" fontWeight="bold">
                        What is UPE?
                    </Text>
                    <Text fontSize="xl" marginTop="1rem">
                        Upsilon Pi Epsilon (UPE) is a national honor society dedicated to fostering excellence in the fields of computing and information disciplines. At UPE BU Chapter, we are committed to enhancing the professional development of our members and cultivating their skills as computer scientists. We invite you to explore our core values outlined below.
                    </Text>
                </Box>
                
            </Flex>
            
            <Text 
                    // justifyContent="center" 
                    // alignItems="center"
                    marginTop={{ base: "40px", md: "60px", lg: "80px" }}                    position="relative"
                    textAlign="center"
                    marginBottom="-70px"
                    left="50%" 
                    transform="translate(-50%, -50%)" 
                    fontSize={{ base: "8xl", md: "10xl", lg: "12xl" }}
                    fontWeight="bold" 
                    color="#523a2a" // Change color as needed
                    textShadow="4px 4px 8px rgba(0, 0, 0, 0.3)"                >
                    UPE CORE VALUES
                </Text>
            {breakpoint === "base" 
                ? 
                <Flex 
                justifyContent="center" 
                alignItems="center"  // Vertical alignment
                margin={{ base: "1rem", md: "4rem" }}  // Adjust margin for smaller screens
                marginBottom={{ base: "0", md: "-70px" }}  // Reset margin bottom on mobile
                wrap="wrap"  // Flex wrapping for smaller screens
              >
                <VStack 
                  spacing={{ base: "1em", md: "2em" }}  // Reduced spacing for smaller screens
                  width="100%"  // Ensure full width for better viewing on mobile
                  alignItems="center"  // Center items vertically inside the VStack
                >
                  <CardFrame2 
                    title="Make Computer Science Fun" 
                    description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving." 
                    width={{ base: "90%", md: "60%", lg: "auto" }}  // Make the card responsive
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
              : 
              <>
                <Flex 
                  justifyContent="center" 
                  alignItems="center"  // Ensure vertical centering
                  margin={{ base: "1rem", md: "3rem" }}  // Adjust margin for smaller screens
                  wrap="wrap"  // Flex wrap for better handling on smaller screens
                >
                  <HStack 
                    spacing={{ base: "1em", md: "4em", lg: "4em" }}  // Adjust spacing for different breakpoints
                    wrap="wrap"  // Ensure cards wrap on small screens
                    justifyContent="center"  // Ensure horizontal centering
                    alignItems="center"  // Ensure vertical alignment
                  >
                    <CardFrame2 
                      title="Make Computer Science Fun" 
                      description="by fostering a cooperative and productive environment where innovation and creativity thrive, inspiring lifelong learning and a passion for problem-solving." 
                      width={{ base: "90%", md: "auto" }}  // Adjust card width for smaller screens
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
                <Flex 
                  justifyContent="center" 
                  alignItems="center"  // Vertical centering
                  margin={{ base: "1rem", md: "3rem" }}  // Adjust margin for smaller screens
                  wrap="wrap"  // Enable wrapping on smaller screens
                >
                  <HStack 
                    spacing={{ base: "1em", md: "4em", lg: "4em" }}  // Adjust spacing for different breakpoints
                    wrap="wrap"  // Enable wrapping
                    justifyContent="center"  // Horizontal centering
                    alignItems="center"  // Vertical centering
                  >
                    <CardFrame2 
                      title="Utilize and Provide New Resources" 
                      description="by cooperating with existing organizations on campus and contributing free and highly relevant public events and forming mutually beneficial relationships with companies." 
                      width={{ base: "90%", md: "auto" }}  // Adjust card width for smaller screens
                    />
                    <CardFrame2 
                      title="Transparency" 
                      description="in how we evaluate applicants to create an aura of trust and inclusivity while learning from any mistakes we make." 
                      width={{ base: "90%", md: "auto" }}
                    />
                  </HStack>
                </Flex>
                </>
            }
        </>
    );
}

export default AboutUs;
