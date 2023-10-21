import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";


function CardFrame(props) {
    const title = props.title
    const description = props.description
    const image = props.image

    return(
        <Box bg="primaryGray" width={{"md":"21em", "lg":"26em"}} height={{"md":"30em","lg":"35em"}} borderRadius="0.5em"
        >
            <VStack justifyContent="center" paddingTop={{"md":".75em","lg":"1em"}}>
                <Image src={image} width ={{"md":"19em", "lg":"24em"}} height={{"md":"10em","lg":"20em"}} borderRadius="0.5em"/>
                <Box
        paddingLeft={{"md":".75em","lg":"2em"}}
        paddingRight={{"md":".75em","lg":"2em"}}>
                <Text fontFamily="secondaryFont" fontWeight="medium" maxWidth="100%" fontSize={{"base":"lg","md":"xl","lg":"2xl"}}>  {props.title} </Text>
                <Text fontFamily="secondaryFont" fontWeight="normal" maxWidth="100%"fontSize={{"base":"md","md":"lg","lg":"xl"}}>  {props.description} </Text>
                </Box>
            </VStack>
        </Box>

    )
}

export default CardFrame