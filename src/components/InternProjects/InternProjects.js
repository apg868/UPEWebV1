import { VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import InternBox from "./InternButton";
import Image1 from "./../../assets_folder/card2.jpg"
import Image2 from "./../../assets_folder/card3.jpg"
import IntroBanner from "../MembersPage/IntroBanner";

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

function InternProjects(){
    return(
        <VStack spacing="2em" paddingTop="2em">
            <IntroBanner content="See Some of Our Highlighted Projects Below" />
            <CaptionCarousel slides={slidesData}/>
        </VStack>
    )
}
export default InternProjects