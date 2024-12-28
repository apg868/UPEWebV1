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
      bg="#f4e7d0"
      width={{ base: "88%", md: "15em", lg: "28em" }}
      height={{ base: "auto", md: "18em", lg: "26.5em" }} // Set height to auto for smaller devices
      borderRadius="0.5em"
      paddingBottom="1em" // Adjusted padding for the bottom
      display="flex" // Use flex for centering content
      flexDirection="column" // Stack items vertically
      alignItems="center" // Center items horizontally
      justifyContent="center" // Center items vertically
    >
      {image && (
        <Image
          src={image}
          marginTop="9px"
          objectFit="cover" // Ensures the image covers the box without distortion
          width={["80%", "90%", "80%"]} // Adjusted width for all screen sizes
          height={["80%", "90%", "50%"]} // Adjusted height for all screen sizes
        />
      )}
      <Box
        paddingLeft={{ base: "1em", md: ".75em", lg: "2em" }} // Adjusted padding for mobile
        paddingRight={{ base: "1em", md: ".75em", lg: "2em" }}
        textAlign="center" // Center align text
      >
        <Text
          fontFamily="secondaryFont"
          fontWeight="bold"
          maxWidth="100%"
          fontSize={{ base: "xl", md: "l", lg: "xl" }}
          paddingTop="0.5em" // Adjusted padding
        >
          {title}
        </Text>
        <Text
          fontFamily="primaryFont"
          fontWeight="normal"
          maxWidth="100%"
          fontSize={{ base: "sm", md: "sm", lg: "lg" }}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
}

export default CardFrame;
