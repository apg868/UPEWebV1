import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";


function CardFrame(props) {
    const title = props.title
    const description = props.description
    const image = props.image

    return(
        <Box bg="primaryGray" width={{"md":"15em", "lg":"25em"}} height={{"md":"30em","lg":"35em"}} borderRadius="0.5em"
        paddingTop={{"md":".75em","lg":"1em"}}
        paddingLeft={{"md":".75em","lg":"2em"}}
        paddingRight={{"md":".75em","lg":"2em"}}
        >
            <VStack justifyContent="center">
                <Image src={image} width ={{"md":"14em", "lg":"24em"}} height={{"md":"10em","lg":"20em"}} borderRadius="0.5em"/>
                <Text fontFamily="secondaryFont" fontWeight="medium" maxWidth="100%" fontSize={{"base":"lg","md":"xl","lg":"2xl"}}>  {props.title} </Text>
                <Text fontFamily="secondaryFont" fontWeight="normal" maxWidth="100%"fontSize={{"base":"md","md":"lg","lg":"xl"}}>  {props.description} </Text>
            </VStack>
        </Box>

    )
}

export default CardFrame