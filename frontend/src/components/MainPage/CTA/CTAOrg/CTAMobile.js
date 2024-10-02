import { VStack, Flex, Text, Button } from "@chakra-ui/react";

function CTAMobile() {
  return (
    <Flex
      position="relative"
      top="0"
      right="0"
      bottom="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      maxWidth="90%"
      marginX="auto"
    >
      <Flex
        bg="primaryRed"
        width="95%"
        height="30em"
        marginTop="5em"
        justifyContent="center"
        borderRadius="2em"
        p="1.5em"
        align="center"
        alignSelf="center"
      >
        <VStack spacing="3em">
          <Text
            color="white"
            fontSize="3xl"
            fontFamily="secondaryFont"
            fontWeight="medium"
          >
            Want to Join?
          </Text>
          <VStack spacing="2.5em">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBdwK-C3rWQqtKba-RdmxZLG4dLfsXPirJa1NEkIC1bp4aSw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <Button
                bg="white"
                _hover={{ bg: "bd4142", textColor: "white" }}
                borderRadius="2em"
                fontFamily="secondaryFont"
                fontWeight="bold"
                color="#880708"
                h="3em"
                w="15em"
                fontSize="md"
              >
                Join our Mailing List
              </Button>
            </a>
          </VStack>
          <Text
            color="white"
            fontSize="xl"
            fontFamily="secondaryFont"
            fontWeight="medium"
            maxWidth="50%"
            textAlign="center"
          >
            Our applications open every fall and spring semester
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default CTAMobile;
