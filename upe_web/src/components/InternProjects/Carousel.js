import { useState } from 'react';
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function CaptionCarousel({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const currentName = slides[currentSlide]?.name || "";
    const currentDescription = slides[currentSlide]?.description || "";

    return (
        <Box position="relative" w="100%" h="80vh">
            <Box
                w="100%"
                h="100%"
                bgImage={`url(${slides[currentSlide]?.image || ""})`}
                bgSize="cover"
                bgPosition="center"
                position="relative"
            >
                <VStack
                    spacing={3}
                    position="absolute"
                    bottom="10%"
                    left="5%"
                    bg="rgba(0,0,0,0.7)"
                    p={{"base":"0.5","md":"1","lg":"2"}}
                    w={{"base":"10em", "md":"15em","lg":"20em"}}
                    borderRadius="md"
                    alignItems="left"
                >
                    <Text fontSize={{"base":"lg","md":"xl","lg":"2xl"}} fontFamily="primaryFont" fontWeight="medium" color="white">{currentName}</Text>
                    <Text fontSize={{"base":"md","md":"lg","lg":"xl"}} fontFamily="bannerFont" color="white">{currentDescription}</Text>
                </VStack>

                <Button
                    position="absolute"
                    top="50%"
                    left="2%"
                    transform="translateY(-50%)"
                    variant="ghost"
                    onClick={handlePrev}
                    _hover={{ bg: "transparent" }}
                >
                    <Box bg="rgba(255,255,255,0.9)" borderRadius="50%" p={1}>
                        <ChevronLeftIcon w={{"base":"5","md":"6","lg":"9"}} h={{"base":"5","md":"6","lg":"9"}} color="darkred" />
                    </Box>
                </Button>

                <Button
                    position="absolute"
                    top="50%"
                    right="2%"
                    transform="translateY(-50%)"
                    variant="ghost"
                    onClick={handleNext}
                    _hover={{ bg: "transparent" }}
                >
                    <Box bg="rgba(255,255,255,0.9)" borderRadius="50%" p={1}>
                        <ChevronRightIcon w={{"base":"5","md":"6","lg":"9"}} h={{"base":"5","md":"6","lg":"9"}} color="darkred" />
                    </Box>
                </Button>
            </Box>
        </Box>
    );
}

export default CaptionCarousel;
