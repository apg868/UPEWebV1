import { HStack, VStack, Flex, Text, Button} from "@chakra-ui/react";


function CTAMobile(){
    return(
        <Flex
        position="relative"
        top="0"
        right="0"
        bottom="0"
        left="0"
        justifyContent="center"
        alignItems="center">
        <Flex bg="primaryRed" width="20em" height="25em" marginTop="5em"
         justifyContent="center" borderRadius="2em" p="1.5em" align="center" alignSelf="center">
            <VStack spacing="5em">
                <Text color="white" fontSize="2xl"
                fontFamily="secondaryFont" fontWeight="medium"> Want to Join? </Text>
                <VStack spacing="2.5em">
                    <a href="https://docs.google.com/forms/d/1HjThY70Ucu2ne6P3kPqFxn31WBTdu9P12SGX5YFTTE8/closedform" target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="white"
                            borderRadius="2em"
                            fontFamily="secondaryFont"
                            fontWeight="normal"
                            color="primaryRed"
                            w="13em"
                            fontSize="md"
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
                            w="13em"
                            fontSize="md"
                        >
                            Interview Sign-up
                        </Button>
                    </a>
                    </VStack>
                <Flex w="22em" bg="white" height="2em" justifyContent="center" borderRadius="0.1em" Align="center"
                fontFamily="secondaryFont" fontSize="sm" marginTop={{"md":"1em", "lg":"2em"}}
                fontWeight="light"> Our applications open every fall and spring semester</Flex>
            </VStack>
        </Flex>
        </Flex>
    )
}

export default CTAMobile