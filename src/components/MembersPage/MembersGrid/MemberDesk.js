import profile1 from "./../../../assets_folder/tempProfile.jpg";
import MemberFrame from "./MemberFrame";
import { HStack, VStack, Text, Button, Collapse, Box } from "@chakra-ui/react";
import IntroBanner from "./IntroBanner";
import React, {useState} from "react";

import student_list from '../../../assets_folder/students.json';

function MemberDesk(){
    /* we can have a class Student and map all Student objects in a list to the MemberFrame component
        import student_list from '../../../assets_folder/students.json';
        import studentImages from '../../../assets_folder/studentImages';

        <HStack spacing="4rem">
        {student_list.map((idx, student) => {
            return <MemberFrame name={student.name} title={student.title} image={student.image_path} 
            major={student.major} college={student.college} year={student.year} funfact={student.funfact} />
        })}
        </HStack>
    */
    const [isFunFactVisible, setIsFunFactVisible] = useState(student_list.map(() => false));

    const toggleFunFact = (index) => {
        const updatedVisibility = [...isFunFactVisible];
        updatedVisibility[index] = !updatedVisibility[index];
        setIsFunFactVisible(updatedVisibility);
    };

    let student_sub_list = [];
    for (let i = 0; i < student_list.length; i += 3) {
        student_sub_list.push(student_list.slice(i, i + 3));
    }

    return(
        <VStack spacing="2rem" paddingTop="3rem">
        <IntroBanner/>

        {student_sub_list.map((sub_list, idx1) => {
            return <HStack spacing="4rem" key={idx1 * 7}>
            {sub_list.map((student, idx2) => {
                return <VStack key={idx1 * 7 + idx2 * 6 + 1}>
                <MemberFrame name={student.name} title={student.title} image={profile1} 
                major={student.major} college={student.college} year={student.year} key={idx1 * 7 + idx2 * 6 + 2}/>
                <Button onClick={() => toggleFunFact(idx1 * 3 + idx2)} colorScheme="teal" key={idx1 * 7 + idx2 * 6 + 3}>About Me</Button>
                <Collapse in={isFunFactVisible[idx1 * 3 + idx2]} key={idx1 * 7 + idx2 * 6 + 4}>
                    <Box p={4} mt={4} borderWidth="1px" borderRadius="md" key={idx1 * 7 + idx2 * 6 + 5}>
                    <Text fontFamily="bannerFont" fontSize="md" key={idx1 * 7 + idx2 * 6 + 6}> {student.funfact} </Text>
                    </Box>
                </Collapse>
                </VStack>
            })}
            </HStack>
        })}

        </VStack>
    )
}
export default MemberDesk