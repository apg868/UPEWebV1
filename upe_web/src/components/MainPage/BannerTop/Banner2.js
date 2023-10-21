import { useBreakpointValue, Flex, Text, Box, HStack, VStack } from "@chakra-ui/react";
import bannerMain from './../../../assets_folder/banner2.jpg';

function Banner2(){
    return(
        <Flex
        bgImage={bannerMain}
        w="100vw"
        h="90vh"
        alignItems="center"        // Changed from "flex-center" to "center"
        justifyContent="center"    // Set to "center"
        padding="2em"
        backgroundRepeat="no-repeat"
        paddingRight={{"base":"2em", "md":"5em","lg":"7em"}}
        >
            <Box
                background="rgb(218,218,218,0.9)"
                borderRadius="1em"
                p={{"base":"1.5em", "md":"3em", "lg":"3.5em"}}
            >
                <VStack spacing="1em">
                    <Text
                        fontFamily={"bannerFont"}
                        fontWeight="normal"
                        fontSize={{"base":"md", "md": "lg","lg":"2xl"}}
                        > Upsilon &nbsp; Pi &nbsp; Epsilon
                    </Text>
                    <Text
                    fontFamily={"bannerFont"}
                    fontWeight="light"
                    fontSize={{"base":"sm", "md": "md","lg":"lg"}}>  Boston University
                    </Text>
                    <HStack spacing={{"base":"5em","md":"6em","lg":"8em"}} paddingTop={{"base":"1em","md":"2em","lg":"3em"}} marginBottom={{"base":"-1em","md":"-2em","lg":"-3em"}}>
                        <Text fontFamily={"bannerFont"} fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Υ</Text>
                        <Text fontFamily={"bannerFont"} fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Π</Text>
                        <Text fontFamily={"bannerFont"} fontSize={{"base":"md", "md": "lg","lg":"2xl"}}>Ε</Text>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
    )
}

export default Banner2;
