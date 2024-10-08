import React, { useEffect, useState } from "react";

import {
  HStack,
  VStack,
  Text,
  // Button,
  Collapse,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";

import IntroBanner from "./IntroBanner";
import MemberFrame from "./MemberFrame";

function MembersPage() {

  const [students, setStudents] = useState([]);

  const [funFactVisibilities, setFunFactVisibilities] = useState(
    Object.fromEntries(students.map((x) => [x._id, false]))
  );

  const toggleFunFact = (studentId) => {
    let clone = Object.assign({}, funFactVisibilities);
    clone[studentId] = !clone[studentId];
    setFunFactVisibilities(clone);
  };

  useEffect(() => {
    const BACKEND_URL = "http://localhost:8080/students/";
  
    fetch(BACKEND_URL)
      .then(response => response.json())
      .then(response => {
        setStudents(response.data);
      });
  }, [])

  const breakpoint = useBreakpointValue({
    base: "base",
    md: "md",
    lg: "lg",
    xl: "xl",
    "3xl": "3xl",
  });

  let ROW_LENGTH;
  switch (breakpoint) {
    case "3xl":
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

  console.log(ROW_LENGTH);

  let officers = getOfficers(students);
  let plebs = students.filter((x) => x.rank == "Member");

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
        <HStack spacing="3rem">
          {row.map((member) => {
            return (
              <VStack    key={member._id}>
                <MemberFrame student={member} />
                <Collapse in={funFactVisibilities[member._id]}>
                </Collapse>
              </VStack>
            );
          })}
        </HStack>
      );
    });
  }

  return (
    <VStack spacing="2rem" paddingTop="2rem" paddingBottom="3em">
      <IntroBanner content={"Executive Board Members"} />
      {getGridJsx(officers)}
      <IntroBanner content={"Current Members"} />
      {getGridJsx(plebs)}
    </VStack>
  );
}

function getOfficers(students)
{
  let president = whereRank(students, "President");
  let vicePresident = whereRank(students, "Vice President");
  let secretary = whereRank(students, "Secretary");
  let treasurer = whereRank(students, "Treasurer");
  let recruitment = whereRank(students, "Recruitment");
  let operations = whereRank(students, "Operations");
  let internal = whereRank(students, "Internal Development");
  let marketing = whereRank(students, "Marketing");

  let res = [];
  if (president) res.push(president);
  if (vicePresident) res.push(vicePresident);
  if (secretary) res.push(secretary);
  if (treasurer) res.push(treasurer);
  if (recruitment) res.push(recruitment);
  if (operations) res.push(operations);
  if (internal) res.push(internal);
  if (marketing) res.push(marketing);

  return res;
}

function whereRank(students, rank) {
  console.log(rank);
  for (let i = 0; i < students.length; i++) {
    if (students[i].rank === rank) {
      return students[i];
    }
  }

  return null;
}

export default MembersPage;