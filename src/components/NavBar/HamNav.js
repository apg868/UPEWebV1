import React from "react";
import {
  Flex,
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; // This is Chakra UI's default hamburger icon
import { Link } from "react-router-dom";
import logoRED from "./../../assets_folder/logoRED.png";

function HamNav() {
  return (
    <Flex align="center" justifyContent="space-between" w="100%" p={3} bg="primaryGray" borderBottom="2px" borderBottomColor="primaryRed">
      <Link to="/">
        <Image src={logoRED} boxSize="5em" borderRadius="4em" />
      </Link>

      <Menu position="0">
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              size="lg"
              isActive={isOpen}
            />
            <MenuList>
              <MenuItem as={Link} to="/">
                <Text fontFamily="secondaryFont" fontWeight="light">
                  Home
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/members">
                <Text fontFamily="secondaryFont" fontWeight="light">
                  Members
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/intern-projects">
                <Text fontFamily="secondaryFont" fontWeight="light">
                  Highlights
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/about-us">
                <Text fontFamily="secondaryFont" fontWeight="light">
                  About Us
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="https://calendar.google.com/calendar/u/0?cid=Y19lZGQ0Y2ZkZjBmYjA0OWRkZGI3MmQwNzU4Y2Y1MTE1NTViZWYzZDJmZDQ1Mzk4MmRiNDI0MGEyNzJlNTI5MmI5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">
                <Text fontFamily="secondaryFont" fontWeight="light">
                  Calendar
                </Text>
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
}

export default HamNav;
