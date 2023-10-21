import { HStack, VStack, Flex, Text, Button } from "@chakra-ui/react";


function CTADesk(){
    return(
        <>
        <Flex bg="primaryRed" width="95vw" height="60vh" marginTop="12vh"
        marginLeft="2.5vw"  justifyContent="center" borderRadius="2em" p="4em">
            <VStack spacing="10vh">
                <Text color="white" fontSize={{"md":"2xl","lg":"5xl"}}
                fontFamily="secondaryFont"> Want to Join? </Text>
                <HStack spacing="10vw">
                <Button bg="white"
                    fontFamily="secondaryFont" fontWeight="normal" color="primaryRed" w="15vw"
                    fontSize={{"base":"lg","md":"xl","lg":"2xl"}}> Application
                </Button>
                <Button bg="white"
                    fontFamily="secondaryFont" fontWeight="normal" color="primaryRed"
                    fontSize={{"base":"lg","md":"xl","lg":"2xl"}}> Interview Signup
                </Button>
                </HStack>
                <Flex w="90vw" bg="white" height="5vh" justifyContent="center"
                fontFamily="primaryFont"> Our applications open every fall and spring semester</Flex>
            </VStack>
        </Flex>
        </>
    )
}

export default CTADesk