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
    <Flex
      align="right"
      justifyContent="space-between"
      // w="100%"
      // p={3}
      // bg="#ece7dc"
      // borderBottom="2px"
      // borderBottomColor="primaryRed"
      position="sticky"
      top={0}
      left={0}
      right={0}
      bg={{ md: "#ece7dc" }}
      w="100%"
      h="8vh"
      zIndex={1}
      justify="flex-start"
    >
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
              <MenuItem
                as={Link}
                to="https://calendar.google.com/calendar/embed?src=c_edd4cfdf0fb049dddb72d0758cf511555bef3d2fd453982db4240a272e5292b9%40group.calendar.google.com&ctz=America%2FNew_York"
                target="_blank"
              >
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
