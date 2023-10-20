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
    <Flex align="center" justifyContent="space-between" w="100%" p={3}>
      <Image src={logoRED} boxSize="10vh" borderRadius="4em" />

      <Menu>
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
                <Text fontFamily="primaryFont" fontWeight="thin">
                  Home
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/members">
                <Text fontFamily="primaryFont" fontWeight="thin">
                  Members
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/intern-projects">
                <Text fontFamily="primaryFont" fontWeight="thin">
                  Intern Projects
                </Text>
              </MenuItem>
              <MenuItem as={Link} to="/about-us">
                <Text fontFamily="primaryFont" fontWeight="thin">
                  About Us
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
