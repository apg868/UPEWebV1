import { Box, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

function CardFrame2(props) {
  const { title, description } = props;
  const titleInDescription = title.toLowerCase().charAt(0).toUpperCase() + title.toLowerCase().slice(1);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      bg="#f4e7d0"
      width={{ base: "80%", sm: "60%", md: "25em", lg: "25em" }} // Responsive width for the card
      height={{ base: "auto", md: "15em" }} // Auto height on smaller screens
      borderRadius="1em"
      onClick={handleFlip}
      cursor="pointer"
      transformStyle="preserve-3d"
      transition="transform 0.6s"
      transform={isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
      marginY="1em" // Increase vertical margin for better spacing
      border="2px solid white"
      _hover={{ border: "2px solid red" }}
      display="flex" // Use flexbox for centering
      alignItems="center" // Center align vertically
      justifyContent="center" // Center align horizontally
    >
      <VStack height="100%" alignItems="center" justifyContent="center">
        {!isFlipped && (
          <Box
            width="100%" // Set width to 100% for unflipped content
            padding={{ base: "1em", md: "0.75em" }} // Responsive padding
          >
            <Text
              fontFamily="secondaryFont"
              fontWeight="bold"
              color="black"
              fontSize={{ base: "xl", md: "2xl" }} // Responsive font size
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
            width="100%" // Set width to 100% for flipped content
            padding={{ base: "1em", md: "0.75em" }} // Responsive padding
            transform="rotateY(180deg)"
            textAlign="center" // Center align text
          >
            <Text
              fontFamily="secondaryFont"
              fontWeight="semibold"
              fontSize={{ base: "lg", md: "lg" }} // Responsive font size
            >
              {titleInDescription}
            </Text>
            <Text
              fontFamily="secondaryFont"
              fontWeight="normal"
              fontSize={{ base: "sm", md: "lg" }} // Responsive font size
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
