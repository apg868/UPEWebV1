import { Box, Text } from "@chakra-ui/react"; 
import Banner from "./BannerTop/Banner";
import Cards from "./CardSect/Cards";
import CTA from "./CTA/CTA";
import bannerImage from '../../assets_folder/banner3.jpg';

function MainPage() {
    return (
        <>          
        <Box > {/* Set background color and minHeight to cover full page */}

            <Box 
                
                position="relative" 
                height={{ base: "-10px", md: "200px", lg: "250px" }} // Added lg height
                textAlign="center"
                >
                <Banner bannerImage={bannerImage} logo={true} />
                
                <Text 
                    mt={{ base: "-30px", md: "-45px", lg: "-120px" }}
                    fontSize={{ base: "6xl", md: "6xl", lg: "7xl" }}
                    fontWeight="bold" 
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                    transform={{ base: "translateY(-300%)", md: "translateY(-400%)", lg: "translateY(-275%)" }}
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
                    fontSize={{ base: "2xl", md: "2.5xl", lg: "3xl" }}
                    fontWeight="bold" 
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                    transform={{ base: "translateY(-1300%)", md: "translateY(-750%)", lg: "translateY(-690%)" }}
                    >
                    Your Gateway to CS Excellence
                </Text>
            </Box>      
            
            </Box>

            
            <Box
             marginTop={{ base: "-140px", md: "430px", lg: "100px" }} 
             marginBottom={{ base: "-5rem", md: "-24rem", lg: "-18rem" }}
            > 
                <Cards
                cardH={{ base: "20em", md: "25em", lg: "30em" }}
                />
            </Box>  

            
            <CTA             />

        </>
    );
}

export default MainPage;
