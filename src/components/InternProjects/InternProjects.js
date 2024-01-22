import { Spacer, VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import InternBox from "./InternButton";
import Image1 from "./../../assets_folder/card2.jpg"
import Image2 from "./../../assets_folder/card3.jpg"
import IntroBanner from "../MembersPage/IntroBanner";
import InternshipCarousel from "./Carousel2";
import Intern1 from "./../../assets_folder/InternshipImages/Intern1.jpg"
import Intern2 from "./../../assets_folder/InternshipImages/tempIntern2.jpg"

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
    name: "Aiden Clark, CAS 2025",
    description: "BI & Analysis Intern",
    company: "The Clearing House",
    },

    {
        image: Intern2,
        name: "Lee Sang Hyeok, T1 2025",
        description: "Mid Laner",
        company: "T1",
        }

]

function InternProjects(){
    return(
        <VStack spacing="3em" paddingTop="2em">
            <IntroBanner content="See Some of Our Highlighted Projects Below" />
            <CaptionCarousel slides={slidesData}/>
            <IntroBanner content="See the success of UPE Members in Industry!"/>
            <InternshipCarousel slides={internsData}/>
        </VStack>
    )
}
export default InternProjects