import { Box, Text } from "@chakra-ui/react"; 
import Banner from "./BannerTop/Banner";
import Banner2 from "./BannerTop/Banner2";
import BannerTransition from "./BannerTransition/BannerTransition";
import Cards from "./CardSect/Cards";
import CTA from "./CTA/CTA";
import bannerImage from '../../assets_folder/banner3.jpg';

function MainPage() {
    return (
        <>          
        <Box > {/* Set background color and minHeight to cover full page */}

            <Box 
                
                position="relative" 
                height={{ base: "150px", md: "200px" }}
                textAlign="center"
                >
                <Banner bannerImage={bannerImage} logo={true} />
                
                <Text 
                    marginTop="-60px" 
                    fontSize="7xl" 
                    fontWeight="bold" 
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                    transform="translateY(-275%)"
                >
                    <span style={{ color: '#ece7dc'}}>BU </span>
                    <span style={{ color: '#880708'}}>U</span>
                    <span style={{ color: '#ece7dc'}}>PSILON </span>
                    <span style={{ color: '#880708'}}>P</span>
                    <span style={{ color: '#ece7dc'}}>I </span>
                    <span style={{ color: '#880708'}}>E</span>
                    <span style={{ color: '#ece7dc'}}>PSILON</span>
                </Text>

                <Text 
                    fontSize="3xl" 
                    fontWeight="bold" 
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                    transform="translateY(-690%)"
                >
                    Your Gateway to CS Excellence
                </Text>
            </Box>
       
            <Box marginTop="100px" marginBottom="-20rem"> {/* Additional space can be adjusted here */}
                <Cards cardH="30em" />
            </Box>        
            <CTA />
            </Box>

        </>
    );
}

export default MainPage;
