import { useBreakpointValue, Flex, Text, Box, Image} from "@chakra-ui/react";
import Banner from "./BannerTop/Banner"
import Banner2 from "./BannerTop/Banner2"
import BannerTransition from "./BannerTransition/BannerTransition";
import Cards from "./CardSect/Cards";
import CTA from "./CTA/CTA";

function MainPage(){
    return(
        <>
        <Banner/>
        <BannerTransition/>
        <Cards/>
        <CTA/>
        </>
    )
}

export default MainPage