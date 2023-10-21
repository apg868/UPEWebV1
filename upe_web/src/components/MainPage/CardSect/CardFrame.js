import { useBreakpointValue, Flex, Text, Box, Image, HStack, VStack } from "@chakra-ui/react";


function CardFrame(props) {
    const title = props.title
    const description = props.description
    const image = props.image

    return (
        <Box bg="primaryGray" width={{ "base":" 21em", "md": "13em", "lg": "21em" }} height={{ "base":"26.5em", "md": "20em", "lg": "26.5em" }} borderRadius="0.5em"
        >
            <VStack justifyContent="center" paddingTop={{ "base":"1em",  "md": ".75em", "lg": "1em" }}>
                <Image src={image} width={{ "base":"20em", "md": "12em", "lg": "20em" }} height={{"base":"16em", "md": "9.5em", "lg": "16em" }} borderRadius="0.5em" />
                <Box
                    paddingLeft={{ "base":"2em", "md": ".75em", "lg": "2em" }}
                    paddingRight={{ "base":"2em", "md": ".75em", "lg": "2em" }}>
                    <Text fontFamily="secondaryFont" fontWeight="medium" maxWidth="100%" fontSize={{ "base": "xl", "md": "md", "lg": "xl" }}>  {props.title} </Text>
                    <Text fontFamily="primaryFont" fontWeight="normal" maxWidth="100%" fontSize={{ "base": "lg", "md": "sm", "lg": "lg" }}>  {props.description} </Text>
                </Box>
            </VStack>
        </Box>

    )
}

export default CardFrame