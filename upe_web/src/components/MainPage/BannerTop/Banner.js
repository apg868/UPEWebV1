import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";
import bannerMain from './../../../assets_folder/banner2.jpg';



function Banner(){
    return(
        <Flex
            bgImage={bannerMain}
            w="100vw"
            h={{"base":"70vh", "md":"70vh"}}
            alignItems="flex-start"
            justifyContent="flex-start"
            padding="2em"
            backgroundRepeat="no-repeat"
            paddingLeft={{"base":"1em","md":"2em","lg":"3em"}}
            paddingTop={{"base":"2em","md":"2em","lg":"3em"}}
        >
            <Box
                background="rgb(218,218,218,1)"
                borderRadius="1em"
                p={{"base":"0.5em", "md":"0.5em", "lg":"0.5em"}}
            >
                <VStack spacing="0em">
                    <HStack spacing = "0em">
                    <Text
                        fontFamily={"bannerFont"}
                        fontWeight="normal"
                        color="secondaryRed"
                        fontSize={{"base":"md", "md": "lg","lg":"2xl"}}
                        > Upsilon &nbsp;
                    </Text>
                    <Text
                        fontFamily={"bannerFont"}
                        fontWeight="normal"
                        color="white"
                        fontSize={{"base":"md", "md": "lg","lg":"2xl"}}
                        > Pi &nbsp;
                    </Text>
                    <Text
                        fontFamily={"bannerFont"}
                        fontWeight="normal"
                        color="secondaryRed"
                        fontSize={{"base":"md", "md": "lg","lg":"2xl"}}
                        > Epsilon
                    </Text>
                    Pi &nbsp; Epsilon
                    </HStack>
                    <Text
                    fontFamily={"bannerFont"}
                    fontWeight="light"
                    fontSize={{"base":"2xs", "md": "xs","lg":"md"}}>  Boston University Chapter
                    </Text>
                    <HStack spacing={{"base":"4em","md":"5em","lg":"7em"}}>
                        <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Υ</Text>
                        <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Π</Text>
                        <Text fontFamily={"bannerFont"} fontWeight="bold" fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Ε</Text>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Banner;
