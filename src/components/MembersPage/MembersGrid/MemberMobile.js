import profile1 from "./../../../assets_folder/tempProfile.jpg";
import MemberFrame from "./MemberFrame";
import {VStack} from "@chakra-ui/react";
import IntroBanner from "./IntroBanner";


function MemberMobile(){
    return(
        <VStack spacing="2rem" paddingTop="3rem">
        <IntroBanner/>
            <MemberFrame name ="Father Brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="father brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="Father Brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="father brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="Father Brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="father brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="Father Brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
            <MemberFrame name ="father brown" title="Member" image={profile1}
            major="Math and CS" collegeandyear="CAS 2025" funfact="enjoys eating apples on BU Beach" />
        </VStack>

    )
}
export default MemberMobile