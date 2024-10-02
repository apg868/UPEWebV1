import { Box, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function CardFrame2(props) {
  const title = props.title;
  const titleInDescription = props.title.toLowerCase().charAt(0).toUpperCase() + props.title.toLowerCase().slice(1);
  const description = props.description;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardWidth = "25em"; // Set a fixed width for the entire card

  const boxHeight = {
    base: "15em", // Auto height on smaller screens
    md: "15em", // Auto height on medium screens
    lg: "15rem", // Default height for large screens
  };

  const textPadding = {
    base: "2em", // Increased padding on smaller screens
    md: "0.75em", // Default padding for medium screens
  };

  const textWidth = "100%"; // Set a fixed width for the text content

  return (
    
    <Box
      bg="#f4e7d0"
      width={cardWidth} // Set a fixed width for the entire card
      height={boxHeight}
      borderRadius="1em"
      onClick={handleFlip}
      cursor="pointer"
      transformStyle="preserve-3d"
      transition="transform 0.6s"
      transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
      marginY="1em" // Increase vertical margin for better spacing
      border="2px solid white"
      _hover={{ border: "2px solid red"}}
    >
      <VStack height="100%" alignItems="center" justifyContent="center">
        {!isFlipped && (
          
          <Box
            width={textWidth} // Set a fixed width for unflipped content
            paddingLeft={textPadding}
            paddingRight={textPadding}
          >
            <Text
              fontFamily="secondaryFont"
              fontWeight="bold"
              color="black"
              fontSize="2xl"
              textAlign="center"
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 500ms",
              }}
        
            >
              {title}
            </Text>
          </Box>
        )}
        {isFlipped && (
          <Box
            width={textWidth} // Set a fixed width for flipped content
            paddingLeft={textPadding}
            paddingRight={textPadding}
            transform="rotateY(180deg)"
          >
            <Text
              fontFamily="secondaryFont"
              fontWeight="semibold"
              fontSize="lg"
            >
              {titleInDescription}
            </Text>
            <Text
              fontFamily="secondaryFont"
              fontWeight="normal"
              fontSize="lg"
            >
              {description}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
}

export default CardFrame2;