import { Box, Text, VStack } from "@chakra-ui/react";

function CardFrame2(props) {
  const title = props.title;
  const description = props.description;

  const boxWidth = {
    base: "100%", // Full width on smaller screens
    md: "100%", // Full width on medium screens
    lg: "20em", // Default width for large screens
  };

  const boxHeight = {
    base: "auto", // Auto height on smaller screens
    md: "auto", // Auto height on medium screens
    lg: "14rem", // Default height for large screens
  };

  const textPadding = {
    base: "2em", // Increased padding on smaller screens
    md: "0.75em", // Default padding for medium screens
  };

  return (
    <Box
      bg="primaryGray"
      width={boxWidth}
      height={boxHeight}
      borderRadius="0.5em"
      marginX="auto" // Center-align the box
      marginY="1em" // Increase vertical margin for better spacing
    >
      <VStack justifyContent="center" paddingTop="1em">
        <Box
          paddingLeft={textPadding}
          paddingRight={textPadding}
        >
          <Text marginTop="1rem" fontFamily="secondaryFont" fontWeight="medium" maxWidth="100%" fontSize="lg">
            {props.title}
          </Text>
          <Text fontFamily="primaryFont" fontWeight="normal" maxWidth="100%" fontSize="auto">
            {props.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default CardFrame2;
