import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";

function CTADesk(){
    return(
        <>
        <Flex bg="primaryRed" width="95vw" height="60vh" marginTop="12vh"
        marginLeft="2.5vw"  justifyContent="center" borderRadius="2em" p="2vh">
            <VStack spacing={{"md":"2em", "lg":"4em"}}>
                <Text color="white" fontSize={{"md":"5xl","lg":"5xl"}}
                fontFamily="secondaryFont" fontWeight="medium"> Want to Join? </Text>
                <HStack spacing="10vw">
                    <a href="https://docs.google.com/forms/d/1HjThY70Ucu2ne6P3kPqFxn31WBTdu9P12SGX5YFTTE8/closedform" target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="white"
                            size={{"base":"lg", "md":"md","lg":"lg"}}
                            borderRadius="2em"
                            fontFamily="secondaryFont"
                            fontWeight="normal"
                            color="primaryRed"
                            w={{"md":"35vw", "lg":"25vw"}}
                            fontSize={{"md":"2xl","lg":"3xl"}}
                        >
                            Application
                        </Button>
                    </a>
                    <a href="https://www.signupgenius.com/go/10C084EA5AA29A2F4CF8-upeinterview#" target="_blank" rel="noopener noreferrer">
                        <Button
                            bg="white"
                            size={{"base":"lg", "md":"md","lg":"lg"}}
                            borderRadius="2em"
                            fontFamily="secondaryFont"
                            fontWeight="normal"
                            color="primaryRed"
                            w={{"md":"35vw", "lg":"25vw"}}
                            fontSize={{"md":"2xl","lg":"3xl"}}
                        >
                            Interview Sign-up
                        </Button>
                    </a>
                </HStack>
                <Flex w="90vw" bg="white" height="2em" justifyContent="center" borderRadius="0.5em"
                fontFamily="secondaryFont" fontSize={{"md":"2xl","lg":"3xl"}} marginTop={{"md":"2vh", "lg":"7vh"}}
                fontWeight="light"> Our applications open every fall and spring semester</Flex>
            </VStack>
        </Flex>
        </>
    )
}

export default CTADesk;
