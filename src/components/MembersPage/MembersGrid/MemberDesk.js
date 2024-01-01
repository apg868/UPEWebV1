import React, { useState } from "react";

import { HStack, VStack, Text, Button, Collapse, Box, useBreakpointValue } from "@chakra-ui/react";

import IntroBanner from "./IntroBanner";
import MemberFrame from "./MemberFrame";

import students from "../../../assets_folder/students.json";
import profile1 from "./../../../assets_folder/tempProfile.jpg";

function MemberDesk() {
    const [funFactVisibilities, setFunFactVisibilities] = useState(students.map(() => false));

    const toggleFunFact = (index) => {
        const newVisibilities = [...funFactVisibilities];
        newVisibilities[index] = !newVisibilities[index];
        setFunFactVisibilities(newVisibilities);
    };

    const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

    let ROW_LENGTH;
    switch (breakpoint) {
        case "lg":
            ROW_LENGTH = 3;
            break;
        case "md":
            ROW_LENGTH = 2;
            break;
        case "base":
            ROW_LENGTH = 1;
            break;
    }


    let officers = students.filter(x => x.title !== "member");
    let officerRows = [];
    for (let i = 0; i < officers.length; i += ROW_LENGTH) {
        officerRows.push(officers.slice(i, i + ROW_LENGTH));
    }

    let plebs = students.filter(x => x.title == "member");
    let plebRows = [];
    for (let i = 0; i < plebs.length; i += ROW_LENGTH) {
        plebRows.push(plebs.slice(i, i + ROW_LENGTH));
    }

    function getStudentGrid(studentRows) {
        return studentRows.map((row, i) => {
            return (
                <HStack spacing="4rem">
                    {row.map((student, j) => {
                        let student_index = i * ROW_LENGTH + j;
                        return (
                            <VStack>
                                <MemberFrame student={student} image={profile1} />
                                <Button onClick={() => toggleFunFact(student_index)} colorScheme="teal">About Me</Button>
                                <Collapse in={funFactVisibilities[student_index]}>
                                    <Box p={4} mt={4} borderWidth="1px" borderRadius="md">
                                        <Text fontFamily="bannerFont" fontSize="md"> {student.funfact} </Text>
                                    </Box>
                                </Collapse>
                            </VStack>
                        )
                    })}
                </HStack>
            )
        })
    }

    return (
        <VStack spacing="2rem" paddingTop="3rem">
            <IntroBanner content={"E-Board"} />
            {getStudentGrid(officerRows)}
            <IntroBanner content={"Current Members"} />
            {getStudentGrid(plebRows)}
        </VStack>
    )
}
export default MemberDesk