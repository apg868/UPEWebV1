import { Box, Text, Flex } from "@chakra-ui/react"; 
import Banner from "./BannerTop/Banner";
import Cards from "./CardSect/Cards";
import CTA from "./CTA/CTA";
import bannerImage from '../../assets_folder/banner3.jpg';

function MainPage() {
    return (
        <>
        <Flex position="relative" paddingBottom="30px">
            <Banner bannerImage={bannerImage} />
            <Box
                position="absolute"
                top={{ base: "40%", sm: "35%", lg: "30%" }}
                left="50%"
                transform="translate(-50%, -30%)"
                borderRadius="8px"
                padding={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
                width={{ base: "95%", sm: "90%", md: "90%" }}
                maxWidth={{ base: "1200px", sm: "1200px", md: "1200px" }}
                color="white"
                textAlign="center"
            >
                <Text
                    fontSize={{ base: "6xl", md: "6xl", lg: "7xl" }}
                    fontWeight="bold"
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                    wordBreak="break-word"
                    lineHeight="1.2"
                >
                    <span style={{ color: '#ece7dc' }}>BU </span>
                    <span style={{ color: '#880708' }}>U</span>
                    <span style={{ color: '#ece7dc' }}>PSILON </span>
                    <span style={{ color: '#880708' }}>P</span>
                    <span style={{ color: '#ece7dc' }}>I </span>
                    <span style={{ color: '#880708' }}>E</span>
                    <span style={{ color: '#ece7dc' }}>PSILON</span>
                </Text>

                <Text
                    fontSize={{ base: "2xl", md: "2.5xl", lg: "3xl" }}
                    fontWeight="bold"
                    color="#ece7dc"
                    textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                >
                    Your Gateway to CS Excellence
                </Text>
            </Box>
        </Flex>

        <Box
        >
            <Cards
                cardH={{ base: "20em", md: "25em", lg: "30em" }}
            />
        </Box>

        <CTA />

    </>
    );
}

export default MainPage;
