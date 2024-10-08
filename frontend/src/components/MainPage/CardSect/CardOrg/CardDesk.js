import Image1 from "./../../../../assets_folder/company.png";
import Image2 from "./../../../../assets_folder/card2.png";
import Image3 from "./../../../../assets_folder/card3.png";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import CardFrame from "../CardFrame";

function CardDesk() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt={{ base: "2em", md: "2em", lg: "30em" }}
      mb={{ base: "2em", md: "20em", lg: "15em" }}
      p={{ base: "2em", md: "3em", lg: "4em" }} // Add padding for smaller devices
    >
      <VStack spacing={{ base: "2em", md: "3em", lg: "4em" }} align="center">
        <HStack
          spacing={{ base: "1em", sm: "2em", md: "3em", lg: "4.5em" }} // Responsive spacing
          flexWrap="wrap" // Allow wrapping of cards for smaller screens
          justify="center" // Center the cards in the HStack
        >
          <CardFrame 
            image={Image1} 
            title="Develop Your Network" 
            description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." 
          />
          <CardFrame 
            image={Image2} 
            title="Gain Marketable Experience" 
            description="Build your development skills by making real contributions to chapter projects." 
          />
          <CardFrame 
            image={Image3} 
            title="Explore Computer Science" 
            description="Participate in our workshops and seminars to strengthen your theoretical knowledge" 
          />
        </HStack>
      </VStack>
    </Flex>
  );
}

export default CardDesk;
