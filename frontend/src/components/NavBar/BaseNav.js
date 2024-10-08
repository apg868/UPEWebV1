import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logoRED from "./../../assets_folder/logoRED.png";

function BaseNav() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Flex
      position="sticky"
      top={0}
      left={0}
      right={0}
      bg={{ md: "#ece7dc" }}
      w="100%"
      h="8vh"
      zIndex={1}
      justify="center" // Center the entire HStack
      align="center" // Center items vertically
    >
      <HStack 
        spacing={{ base: 4, md: 6, lg: 8 }} // Responsive spacing for better alignment
        paddingX={{ base: "2em", md: "4em", lg: "4em" }} // Responsive padding
        justify="center" // Center items within the HStack
      >
        <Image
          src={logoRED}
          boxSize="8vh"
          borderRadius="4em"
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        />
        <HStack
          spacing={{ base: 5, md: 8, lg: 10 }} // Responsive spacing for links
          justify="center" // Center links within the HStack
        >
          <Link to="/">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontFamily="secondaryFont"
              pt={1}
              color="#880708"
              _hover={{ color: "black" }}
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Responsive font size
            >
              HOME
            </Text>
          </Link>
          
          <Link to="/members">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Responsive font size
              pt={1}
              color="#880708"
              _hover={{ color: "black" }}
            >
              MEMBERS
            </Text>
          </Link>
          
          <Link to="/intern-projects">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Responsive font size
              pt={1}
              color="#880708"
              _hover={{ color: "black" }}
            >
              HIGHLIGHTS
            </Text>
          </Link>
          
          <Link to="/about-us">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Responsive font size
              pt={1}
              color="#880708"
              _hover={{ color: "black" }}
            >
              ABOUT
            </Text>
          </Link>
          
          <Link
            to="https://calendar.google.com/calendar/embed?src=c_edd4cfdf0fb049dddb72d0758cf511555bef3d2fd453982db4240a272e5292b9%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
          >
            <Text
              textAlign="center"
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ base: "md", md: "xl", lg: "xl" }} // Responsive font size
              pt={1}
              color="#880708"
              _hover={{ color: "black" }}
            >
              CALENDAR
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
