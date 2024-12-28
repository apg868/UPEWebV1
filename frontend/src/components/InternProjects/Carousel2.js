import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function InternshipCarousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);//change every 10 seconds
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    const currentImage = slides[currentSlide]?.image || "";
    const currentName = slides[currentSlide]?.name || "";
    const currentMajor = slides[currentSlide]?.major || "";
    const currentDescription = slides[currentSlide]?.description || "";
    const currentCompany = slides[currentSlide]?.company || "";

    return (
        <Box position="relative" bgSize="cover" bgPosition="center" justifyContent="center">
            <Box
                w="60vw"
                h="60vh"
                bgImage={`url(${currentImage})`}
                bgSize="cover"
                align="center"
                bgPosition="center center"
                position="relative"
            >
                <VStack
                    spacing={0.5}
                    position="absolute"
                    bottom={{"base":"2%","md":"4%", "lg":"6%"}}
                    left={{"base":"2%","md":"3%","lg":"4%"}}
                    bg="rgba(0,0,0,0.9)"
                    p={{"base":"0.5","md":"1","lg":"2"}}
                    w={{"base":"4rem","md":"5rem","large":"10rem"}}
                    border="2px solid"
                    borderColor="white"
                    alignItems="left"
                >
                    <Text fontSize={{"base":"xs","md":"sm","lg":"lg"}} fontFamily="primaryFont" fontWeight="medium" color="white">{currentName}</Text>
                    <Text fontSize={{"base":"xs","md":"sm","lg":"lg"}} fontFamily="primaryFont" fontWeight="medium" color="white">{currentMajor}</Text>
                    <Text fontSize={{"base":"xs","md":"sm","lg":"lg"}} fontFamily="secondaryFont" color="white">{currentDescription}</Text>
                    <Text fontSize={{"base":"xs","md":"sm","lg":"lg"}} fontFamily="secondaryFont" color="white">{currentCompany}</Text>
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

export default InternshipCarousel;