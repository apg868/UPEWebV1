//parent file to conditionally load either DeskCards for regular display, or MobileCards for mobile

import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";



function CTA() {
  return (
    <Flex
      position="relative"
      top="0"
      right="0"
      bottom="0"
      left="0"
      mb={{ base: "3rem", md: "3rem", lg: "4rem" }} // Responsive margin bottom
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bg="#880708"
        width={{ base: "90%", md: "80%", lg: "75%" }} 
        height={{ md: "25em", lg: "30em" }}
        marginTop="5em"
        justifyContent="center"
        borderRadius="2em"
        p="1.5em"
        mx={{ base: "1.5em", lg: "3em" }}  
        align="center"
        alignSelf="center"
      >
        <VStack spacing={{ md: "5em", lg: "5em" }}>
          <Text
            color="white"
            fontSize={{ md: "5xl", lg: "5xl" }}
            fontFamily="secondaryFont"
            fontWeight="medium"
          >
            Want to Join?
          </Text>
          <HStack spacing={{ base: "3em", lg: "5em" }}>
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
                w={{ base: "12em", lg: "15em" }}
                fontSize={{ md: "2xl", lg: "3xl" }}
              >
                Join our Mailing List
              </Button>
            </a>
          </HStack>
          <Text
            color="white"
            fontSize="xl"
            fontFamily="secondaryFont"
            fontWeight="medium"
          >
            Our applications open every fall and spring semester
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
export default CTA;
