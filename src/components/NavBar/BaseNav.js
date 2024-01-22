import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import logoRED from './../../assets_folder/logoRED.png';

function BaseNav() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Flex position="sticky" top={0} left={0} right={0} bg={{ "md": "primaryGray" }} w='100%' h="9vh" zIndex={1} borderBottom="2px" borderBottomColor="primaryRed">
      <HStack spacing={{ "md": "3em", "lg": "15em" }}>
        <Image src={logoRED} boxSize="9vh" borderRadius="4em" style={{ cursor: 'pointer' }} onClick={handleLogoClick} />
        <HStack spacing={{ "md": "6em", "lg": "7em" }} paddingLeft={{ "md": "3em", "lg": "4em" }}>
          <Link to="/">
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "md": "xl", "lg": "2xl" }} pt={1}
              _hover={{ color: "secondaryRed" }}>
              Home
            </Text>
          </Link>
          <Link to="/members">
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "md": "xl", "lg": "2xl" }} pt={1}
              _hover={{ color: "secondaryRed" }}>
              Members
            </Text>
          </Link>
          <Link to="/intern-projects">
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "md": "xl", "lg": "2xl" }} pt={1}
              _hover={{ color: "secondaryRed" }}>
              Highlights
            </Text>
          </Link>
          <Link to="/about-us">
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "md": "xl", "lg": "2xl" }} pt={1}
              _hover={{ color: "secondaryRed" }}>
              About
            </Text>
          </Link>
          <Link to="https://calendar.google.com/calendar/u/0?cid=Y19lZGQ0Y2ZkZjBmYjA0OWRkZGI3MmQwNzU4Y2Y1MTE1NTViZWYzZDJmZDQ1Mzk4MmRiNDI0MGEyNzJlNTI5MmI5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
            <Text fontFamily="secondaryFont" fontWeight="light" fontSize={{ "md": "xl", "lg": "2xl" }} pt={1}
              _hover={{ color: "secondaryRed" }}>
              Calendar
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Flex>
  );
}

export default BaseNav;
