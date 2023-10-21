import { useBreakpointValue, Flex, Text, Box, Image} from "@chakra-ui/react";
import Banner from "./BannerTop/Banner"
import Banner2 from "./BannerTop/Banner2"
import BannerTransition from "./BannerTransition/BannerTransition";

function MainPage(){
    return(
        <>
        <Banner/>
        <BannerTransition/>
        </>
    )
}

export default MainPage