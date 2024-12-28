import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";

function CTA() {
  return (
    <Flex
      position="relative"
      top="0"
      right="0"
      bottom="0"
      left="0"
      mb={{ base: "2rem", md: "3rem", lg: "4rem" }} // Adjusted responsive margin bottom
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bg="#880708"
        width={{ base: "60%", sm: "60%", md: "60%", lg: "65%" }} 
        height={{ base: "auto", md: "20em", lg: "25em" }} // Decreased height for medium and large screens
        marginTop={{ base: "2em", sm: "3em", md: "4em", lg: "5em" }}
        justifyContent="center"
        borderRadius="2em"
        p={{ base: "1rem", md: "1.5em" }} // Responsive padding
        mx={{ base: "1.5em", lg: "3em" }}  
        align="center"
        alignSelf="center"
      >
        <VStack spacing={{ base: "1.5rem", md: "3em", lg: "4em" }}> {/* Decreased spacing for mobile and medium screens */}
          <Text
            color="white"
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }} // Adjusted font size for mobile and medium screens
            fontFamily="secondaryFont"
            fontWeight="medium"
            textAlign="center" // Center align text
          >
            Want to Join?
          </Text>
          <HStack spacing={{ base: "1em", lg: "4em" }} justify="center"> {/* Center the buttons */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBdwK-C3rWQqtKba-RdmxZLG4dLfsXPirJa1NEkIC1bp4aSw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                bg="white"
                _hover={{ bg: "#bd4142", textColor: "white" }}
                borderRadius="2em"
                fontFamily="secondaryFont"
                fontWeight="bold"
                color="#880708"
                h="3em"
                w={{ base: "13em", sm: "20em", lg: "25em" }} // Smaller width for mobile
                fontSize={{ base: "md", md: "xl", lg: "2xl" }} // Responsive font size
              >
                Join our Mailing List
              </Button>
            </a>
          </HStack>
          <Text
            color="white"
            fontSize={{ base: "sm", md: "lg" }} // Smaller font size for mobile and medium screens
            fontFamily="secondaryFont"
            fontWeight="medium"
            textAlign="center" // Center align text
          >
            Our applications open every fall and spring semester
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default CTA;
