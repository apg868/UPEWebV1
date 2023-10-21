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
                <Button
    bg="white"
    size="lg"
    borderRadius="2em"
    fontFamily="secondaryFont"
    fontWeight="normal"
    color="primaryRed"
    w={{"md":"35vw", "lg":"25vw"}}
    fontSize={{"md":"2xl","lg":"3xl"}}
>
    Application
</Button>
<Button
    bg="white"
    size="lg"
    borderRadius="2em"
    fontFamily="secondaryFont"
    fontWeight="normal"
    color="primaryRed"
    w={{"md":"35vw", "lg":"25vw"}}
    fontSize={{"md":"2xl","lg":"3xl"}}
>
    Interview Sign-up
</Button>

                </HStack>
                <Flex w="90vw" bg="white" height="6vh" justifyContent="center" borderRadius="0.5em"
                fontFamily="primaryFont" fontSize={{"md":"md","lg":"3xl"}}> Our applications open every fall and spring semester</Flex>
            </VStack>
        </Flex>
        </>
    )
}

export default CTADesk