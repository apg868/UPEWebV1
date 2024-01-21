import React, { useState } from "react";

import {
  HStack,
  VStack,
  Text,
  Button,
  Collapse,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import IntroBanner from "./IntroBanner";
import MemberFrame from "./MemberFrame";

import students from "../../assets_folder/students.json";

function MembersPage() {
  const [funFactVisibilities, setFunFactVisibilities] = useState(
    Object.fromEntries(students.map((x) => [x.id, false]))
  );

  const toggleFunFact = (studentId) => {
    let clone = Object.assign({}, funFactVisibilities);
    clone[studentId] = !clone[studentId];
    setFunFactVisibilities(clone);
  };

  const breakpoint = useBreakpointValue({
    base: "base",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  let ROW_LENGTH;
  switch (breakpoint) {
    case "2xl":
      ROW_LENGTH = 4;
      break;
    case "xl":
      ROW_LENGTH = 3;
      break;
    case "lg":
      ROW_LENGTH = 2;
      break;
    case "md":
      ROW_LENGTH = 2;
      break;
    case "base":
      ROW_LENGTH = 1;
      break;
  }

  let officers = students.filter((x) => x.title !== "Member");
  let plebs = students.filter((x) => x.title == "Member");

  function matrixizeMemberList(members, rowLength) {
    let memberRows = [];
    for (let i = 0; i < members.length; i += rowLength) {
      memberRows.push(members.slice(i, i + rowLength));
    }

    return memberRows;
  }

  function getGridJsx(members) {
    let membersMatrix = matrixizeMemberList(members, ROW_LENGTH);

    return membersMatrix.map((row) => {
      return (
        <HStack spacing="4rem">
          {row.map((member) => {
            return (
              <VStack key={member.id}>
                <MemberFrame student={member} />
                <Button
                  isDisabled={!member.funfact}
                  onClick={() => toggleFunFact(member.id)}
                  colorScheme="teal"
                >
                  About Me
                </Button>
                <Collapse in={funFactVisibilities[member.id]}>
                  <Box p={4} mt={4} borderWidth="1px" borderRadius="md">
                    <Text fontFamily="bannerFont" fontSize="md">
                      {` ${member.funfact} `}
                    </Text>
                  </Box>
                </Collapse>
              </VStack>
            );
          })}
        </HStack>
      );
    });
  }

  return (
    <VStack spacing="2rem" paddingTop="3rem">
      <IntroBanner content={"E-Board"} />
      {getGridJsx(officers)}
      <IntroBanner content={"Current Members"} />
      {getGridJsx(plebs)}
    </VStack>
  );
}
export default MembersPage;
