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
              href="https://docs.google.com/forms/d/1HjThY70Ucu2ne6P3kPqFxn31WBTdu9P12SGX5YFTTE8/closedform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                bg="white"
                _hover={{ bg: "secondaryRed", textColor: "white" }}
                borderRadius="2em"
                fontFamily="secondaryFont"
                fontWeight="bold"
                color="primaryRed"
                h="3em"
                w="15em"
                fontSize="md"
              >
                Application
              </Button>
            </a>
            <a
              href="https://www.signupgenius.com/go/10C084EA5AA29A2F4CF8-upeinterview#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                bg="white"
                _hover={{ bg: "secondaryRed", textColor: "white" }}
                borderRadius="2em"
                fontFamily="secondaryFont"
                fontWeight="bold"
                color="primaryRed"
                h="3em"
                w="15em"
                fontSize="md"
              >
                Interview Sign-up
              </Button>
            </a>
          </VStack>
          <a
            href="https://www.signupgenius.com/go/10C084EA5AA29A2F4CF8-upeinterview#"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
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
