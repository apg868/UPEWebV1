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
      bg={{ md: "primaryGray" }}
      w="100%"
      h="9vh"
      zIndex={1}
      borderBottom="2px"
      borderBottomColor="primaryRed"
    >
      <HStack spacing={{ md: "3em", lg: "15em" }}>
        <Image
          src={logoRED}
          boxSize="9vh"
          borderRadius="4em"
          style={{ cursor: "pointer" }}
          onClick={handleLogoClick}
        />
        <HStack
          spacing={{ md: "3em", lg: "5em" }}
          paddingLeft={{ md: "3em", lg: "4em" }}
        >
          <Link to="/">
            <Text
              fontFamily="secondaryFont"
              fontWeight="light"
              fontSize={{ md: "xl", lg: "2xl" }}
              pt={1}
              _hover={{ color: "secondaryRed" }}
            >
              Home
            </Text>
          </Link>
          <Link to="/members">
            <Text
              fontFamily="secondaryFont"
              fontWeight="light"
              fontSize={{ md: "xl", lg: "2xl" }}
              pt={1}
              _hover={{ color: "secondaryRed" }}
            >
              Members
            </Text>
          </Link>
          <Link to="/intern-projects">
            <Text
              fontFamily="secondaryFont"
              fontWeight="light"
              fontSize={{ md: "xl", lg: "2xl" }}
              pt={1}
              _hover={{ color: "secondaryRed" }}
            >
              Highlights
            </Text>
          </Link>
          <Link to="/about-us">
            <Text
              fontFamily="secondaryFont"
              fontWeight="light"
              fontSize={{ md: "xl", lg: "2xl" }}
              pt={1}
              _hover={{ color: "secondaryRed" }}
            >
              About
            </Text>
          </Link>
          <Link
            to="https://calendar.google.com/calendar/embed?src=c_edd4cfdf0fb049dddb72d0758cf511555bef3d2fd453982db4240a272e5292b9%40group.calendar.google.com&ctz=America%2FNew_York"
            target="_blank"
          >
            <Text
              fontFamily="secondaryFont"
              fontWeight="light"
              fontSize={{ md: "xl", lg: "2xl" }}
              pt={1}
              _hover={{ color: "secondaryRed" }}
            >
              Calendar
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
