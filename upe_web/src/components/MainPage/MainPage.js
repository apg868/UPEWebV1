import { useBreakpointValue, Flex, Text, Box, Image} from "@chakra-ui/react";
import Banner from "./BannerTop/Banner"
import Banner2 from "./BannerTop/Banner2"
import BannerTransition from "./BannerTransition/BannerTransition";
import Cards from "./CardSect/Cards";
import Footer from "./Footer/Footer.js";

function MainPage(){
    return(
        <>
        <Banner/>
        <BannerTransition/>
        <Cards/>
        <Footer />
        </>
    )
}

export default MainPage