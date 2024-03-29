import {
  useBreakpointValue,
  Flex,
  Text,
  Box,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

function CardFrame(props) {
  const title = props.title;
  const description = props.description;
  const image = props.image;

  return (
    <Box
      bg="primaryGray"
      width={{ base: "88%", md: "15em", lg: "28em" }}
      height={{ base: "26.5em", md: "20em", lg: "26.5em" }}
      borderRadius="0.5em"
      paddingBottom="25em" // Add padding to the bottom
    >
      <VStack
        justifyContent="center"
        paddingTop={{ base: "1em", md: ".75em", lg: "1em" }}
      >
        {image && (
          <Image
            border="2px solid white"
            src={image}
            width={{ base: "22em", md: "14em", lg: "22em" }}
            height={{ base: "18em", md: "11.5em", lg: "18em" }}
            borderRadius="0.5em"
          />
        )}
        <Box
          paddingLeft={{ base: "2em", md: ".75em", lg: "2em" }}
          paddingRight={{ base: "2em", md: ".75em", lg: "2em" }}
        >
          <Text
            textAlign="center"
            fontFamily="secondaryFont"
            fontWeight="medium"
            maxWidth="100%"
            fontSize={{ base: "xl", md: "md", lg: "xl" }}
          >
            {" "}
            {props.title}{" "}
          </Text>
          <Text
            textAlign="center"
            fontFamily="primaryFont"
            fontWeight="normal"
            maxWidth="100%"
            fontSize={{ base: "sm", md: "sm", lg: "lg" }}
          >
            {" "}
            {props.description}{" "}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default CardFrame;
