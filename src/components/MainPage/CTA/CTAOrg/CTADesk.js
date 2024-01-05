import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";

function CTADesk() {
    return (
        <Flex
            position="relative"
            top="0"
            right="0"
            bottom="0"
            left="0"
            justifyContent="center"
            alignItems="center"
        >
            <Flex bg="primaryRed" width="95%" height={{ "md": "25em", "lg": "30em" }} marginTop="5em"
                justifyContent="center" borderRadius="2em" p="1.5em" align="center" alignSelf="center">
                <VStack spacing={{ "md": "5em", "lg": "5em" }}>
                    <Text color="white" fontSize={{ "md": "5xl", "lg": "5xl" }}
                        fontFamily="secondaryFont" fontWeight="medium">
                        Want to Join?
                    </Text>
                    <HStack spacing={{base: "3em", lg: "5em"}}>
                        <a href="https://docs.google.com/forms/d/1HjThY70Ucu2ne6P3kPqFxn31WBTdu9P12SGX5YFTTE8/closedform" target="_blank" rel="noopener noreferrer">
                            <Button
                                bg="white"
                                _hover={{ bg: "secondaryRed", textColor: "white" }}
                                borderRadius="2em"
                                fontFamily="secondaryFont"
                                fontWeight="bold"
                                color="primaryRed"
                                h="3em"
                                w={{base: "12em", lg: "15em"}}
                                fontSize={{ "md": "2xl", "lg": "3xl" }}
                            >
                                Application
                            </Button>
                        </a>
                        <a href="https://www.signupgenius.com/go/10C084EA5AA29A2F4CF8-upeinterview#" target="_blank" rel="noopener noreferrer">
                            <Button
                                bg="white"
                                borderRadius="2em"
                                fontFamily="secondaryFont"
                                color="primaryRed"
                                fontSize={{ "md": "2xl", "lg": "3xl" }}
                                _hover={{ bg: "secondaryRed", textColor: "white" }}
                                h="3em"
                                w={{base: "12em", lg: "15em"}}
                            >
                                Interview Sign-up
                            </Button>
                        </a>
                    </HStack>
                    <Text color="white" fontSize="xl" fontFamily="secondaryFont" fontWeight="medium">
                        Our applications open every fall and spring semester
                    </Text>
                </VStack>
            </Flex>
        </Flex>
    )
}

export default CTADesk;
