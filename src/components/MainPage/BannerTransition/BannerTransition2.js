import { Box, Text } from "@chakra-ui/react";

function BannerTransition2(props) {
  return (
    <Box
      position="relative"
      bg="primaryRed"
      opacity="0.8"
      w={{ base: "60%", md: "60%" }} // Adjust the width for different screen sizes
      h={{ base: "300px", md: "200px" }}
      borderRadius="20px"
      mt={{ base: "-20rem", md: "-20rem"}}
      ml="auto" // Center the banner horizontally on small screens
      mr="auto" // Center the banner horizontally on small screens
      textAlign="center" // Center-align text on small screens
    >
      <Text
        fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
        fontFamily="secondaryFont"
        paddingTop="5px"
        margin="2rem"
        color="white"
        fontWeight="normal"
        textAlign="center" // Center-align text on small screens
        mt="40px"
      >
        {props.text}
      </Text>
    </Box>
  );
}

export default BannerTransition2;
