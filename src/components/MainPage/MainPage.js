import Banner from "./BannerTop/Banner"
import Banner2 from "./BannerTop/Banner2"
import BannerTransition from "./BannerTransition/BannerTransition";
import Cards from "./CardSect/Cards";
import CTA from "./CTA/CTA";
import bannerImage from '../../assets_folder/banner2.jpg'

function MainPage(){
    return(
        <>
        <Banner bannerImage={bannerImage} logo={true} />
        <BannerTransition text="UPE: Your Gateway to CS Excellence" />
        <Cards/>
        <CTA/>
        </>
    )
}

export default MainPage