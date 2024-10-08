import { Text, Flex, } from "@chakra-ui/react";

function InternBox() {
    return (
        

        <Flex justifyContent="center">
            <Flex
                w={{"base":"16em","md":"40em", "lg":"50em"}}
                h={{"base":"5em","md":"5em", "lg":"5em"}}
                alignItems="center"
                justifyContent="center"
            >
                <Text 
                paddingTop="4" 
                textAlign="center" 
                // fontFamily="secondaryFont" 
                color="#523a2a" 
                fontWeight="bold" 
                fontSize={{ "sm": "3xl", "md": "4xl", "lg": "5xl" }} 
                fontFamily="bannerFont"
                wordWrap="break-word"
                >Explore Our Featured Projects</Text>
            </Flex>
        </Flex>
    );
}

export default InternBox;
