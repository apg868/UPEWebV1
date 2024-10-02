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

      // borderBottom="2px"
      // borderBottomColor="primaryRed"
    >
      <HStack 
       spacing={{ md: "2em", lg: "4em" }} // Adjust spacing here
       paddingLeft={{ md: "2em", lg: "2em" }} // Adjust padding here
      >
        {/* <Image
          src={logoRED}
          boxSize="8vh"
          borderRadius="4em"
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        /> */}
        <HStack
          spacing={{ md: "3em", lg: "5em" }}
          paddingLeft={{ md: "4em", lg: "4em" }}
          // justify="flex-start"
        >
          <Image
          src={logoRED}
          boxSize="8vh"
          borderRadius="4em"
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        />
          <Link to="/">
            <Text
              textAlign="left"
              fontWeight="bold"
              fontFamily="secondaryFont"
              pt={1}
              color = "#880708"
              _hover={{ color: "black" }}
              fontSize={{ md: "xl", lg: "xl" }}
            >
              HOME
            </Text>
          </Link>
          
          <Link to="/members">
            <Text
              textAlign="left"
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ md: "xl", lg: "xl" }}
              pt={1}
              color = "#880708"
              _hover={{ color: "black" }}
            >
              MEMBERS
            </Text>
          </Link>
          <Link to="/intern-projects">
            <Text
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ md: "xl", lg: "xl" }}
              pt={1}
              color = "#880708"
              _hover={{ color: "black" }}
            >
              HIGHLIGHTS
            </Text>
          </Link>
          <Link to="/about-us">
            <Text
              fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ md: "xl", lg: "xl" }}
              pt={1}
              color = "#880708"
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
             fontWeight="bold"
              fontFamily="secondaryFont"
              fontSize={{ md: "xl", lg: "xl" }}
              pt={1}
              color = "#880708"
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
