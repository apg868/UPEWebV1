import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";

function CTADesk(){
    return(
    <Flex
        position="relative"
        top="0"
        right="0"
        bottom="0"
        left="0"
        justifyContent="center"
        alignItems="center">
        <Flex bg="primaryRed" width={{"md":"40em", "lg":"60em"}} height={{"md":"25em", "lg":"30em"}} marginTop="5em"
         justifyContent="center" borderRadius="2em" p="1.5em" align="center" alignSelf="center">
            <VStack spacing={{"md":"5em", "lg":"5em"}}>
                <Text color="white" fontSize={{"md":"5xl","lg":"5xl"}}
                fontFamily="secondaryFont" fontWeight="medium"> Want to Join? </Text>
                <HStack spacing="5em">
                    <a href="https://docs.google.com/forms/d/1HjThY70Ucu2ne6P3kPqFxn31WBTdu9P12SGX5YFTTE8/closedform" target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="white"
                            borderRadius="2em"
                            fontFamily="secondaryFont"
                            fontWeight="normal"
                            color="primaryRed"
                            w={{"md":"10em", "lg":"13em"}}
                            fontSize={{"md":"2xl","lg":"3xl"}}
                        >
                            Application
                        </Button>
                    </a>
                    <a href="https://www.signupgenius.com/go/10C084EA5AA29A2F4CF8-upeinterview#" target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="white"

                            borderRadius="2em"
                            fontFamily="secondaryFont"
                            fontWeight="normal"
                            color="primaryRed"
                            w={{"md":"10em", "lg":"13em"}}
                            fontSize={{"md":"2xl","lg":"3xl"}}
                        >
                            Interview Sign-up
                        </Button>
                    </a>
                </HStack>
                <Flex w={{"md":"25em","lg":"30em"}} bg="white" height="2em" justifyContent="center" borderRadius="0.5em"
                fontFamily="secondaryFont" fontSize={{"md":"2xl","lg":"3xl"}} marginTop={{"md":"1em", "lg":"2em"}}
                fontWeight="light"> Our applications open every fall and spring semester</Flex>
            </VStack>
        </Flex>
        </Flex>
    )
}

export default CTADesk;
