import { VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import InternBox from "./InternButton";
import Image1 from "./../../assets_folder/card2.jpg"
import Image2 from "./../../assets_folder/card3.jpg"

const slidesData = [
    {
        image: Image1,
        name: "John Doe",
        description: "A brief description about John Doe."
    },
    {
        image: Image2,
        name: "Jane Smith",
        description: "Description for Jane Smith."
    }
];

function InternProjects(){
    return(
        <VStack spacing="2em" paddingTop="2em">
            <InternBox/>
            <CaptionCarousel slides={slidesData}/>
        </VStack>
    )
}
export default InternProjects