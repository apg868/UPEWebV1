import { Spacer, VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import InternBox from "./InternButton";
import Image1 from "./../../assets_folder/card2.jpg"
import Image2 from "./../../assets_folder/card3.jpg"
import IntroBanner from "../MembersPage/IntroBanner";
import InternshipCarousel from "./Carousel2";
import Intern1 from "./../../assets_folder/InternshipImages/Intern1.jpg"
import Intern2 from "./../../assets_folder/InternshipImages/intern2v4.png"
import InternTemp from "./../../assets_folder/InternshipImages/tempIntern2.jpg"
import Intern3 from "./../../assets_folder/InternshipImages/Intern3v2.png"

const slidesData = [
    {
        image: Image1,
        name: "John Doe",
        description: "A brief description about John Doe.",
        extendedDescription: "A brief description about John Doe.",
        technologies: "react, jsx",
        challenges: "time, organization etc",
        time: "10 hours",

    },
    {
        image: Image2,
        name: "Jane Smith",
        description: "Description for Jane Smith.",
        extendedDescription: "Jane smith's project was a wonderful endeavor. It took this much time, involved these technologies, had these challenges etc",
        technologies: "react, jsx",
        challenges: "time, organization etc",
        time: "10 hours",
    }
];

const internsData =  [
    {
    image: Intern1,
    name: "Aiden Clark",
    major:"CAS 2025",
    description: "BI & Analysis Intern",
    company: "The Clearing House",
    },

    {
    image: Intern2,
    name: "Sai Nayunipati",
    major: "C.S. + Stats '25",
    description: "SWE Intern",
    company: "Jacobs"
    },

    {
        image: Intern3,
        name: "Grace Elias",
        major: "CS 2024",
        description: "SWE Intern",
        company: "Epic",
        },


]

function InternProjects(){
    return(
        <VStack spacing={{"base":"1rem","md":"3rem"}} paddingTop="2em">
            <VStack spacing={{"base":"0.5rem","md":"1.5rem"}}>
                <IntroBanner content="See Some of Our Highlighted Projects Below" />
                <CaptionCarousel slides={slidesData}/>
            </VStack>

            <VStack spacing={{"base":"0.5rem","md":"1.5rem"}}>
                <IntroBanner content="See the success of UPE Members in Industry!"/>
                <InternshipCarousel slides={internsData}/>
            </VStack>

        </VStack>
    )
}
export default InternProjects