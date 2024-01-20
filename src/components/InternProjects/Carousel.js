import React, { useState, useEffect } from 'react';
import { Box, Button, VStack, Text, Flex, CloseButton, HStack, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, SettingsIcon, TimeIcon, SpinnerIcon, InfoIcon } from "@chakra-ui/icons";

function Slide({ slide, handlePrev, handleNext, handleFlip, isFlipped }) {
    return (
        <Box position="relative" w={isFlipped ? "75vw" : "75vw"} h={isFlipped ? "75vh" : "75vh"} bgImage={`url(${slide.image || ""})`} bgSize="cover" bgPosition="center">
            {!isFlipped && (
                <>
                    {/* Slide Content */}
                    <VStack
                        spacing={3}
                        position="absolute"
                        bottom="10%"
                        left="5%"
                        bg="rgba(0,0,0,0.7)"
                        p={{ base: "0.5", md: "1", lg: "2" }}
                        w={{ base: "10em", md: "15em", lg: "20em" }}
                        borderRadius="md"
                        alignItems="left"
                    >
                        <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontFamily="primaryFont" fontWeight="medium" color="white">{slide.name}</Text>
                        <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontFamily="bannerFont" color="white">{slide.description}</Text>
                    </VStack>
                    <NavigationButton direction="left" handleClick={handlePrev} />
                    <NavigationButton direction="right" handleClick={handleNext} />
                    <Button position="absolute" bottom="5%" right="5%" colorScheme="gray" onClick={handleFlip} _hover={{ backgroundColor: "secondaryRed", color: "white" }}>Read More</Button>
                </>
            )}

{isFlipped && (
    <>
    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" w="70%" h="70%" bg="whiteAlpha.900" p={4} borderRadius="md" border="3px solid" borderColor="primaryRed" dropShadow="3px">
        <VStack spacing={{"base":"3em","md":"4em","lg":"4em"}} align="left"
        fontSize={{"base":"xs","md":"sm","lg":"md"}} fontFamily="primaryFont">
            <HStack spacing={{"base":"2em", "md":"4em","lg":"1.5em"}}>
                <Icon as={InfoIcon} />
                <Text fontWeight="bold" > Extended Description: </Text>
                <Text>{slide.extendedDescription}</Text>
            </HStack>
            <HStack spacing={{"base":"2em", "md":"4em","lg":"1.5em"}}>
                <Icon as={SpinnerIcon} />
                <Text fontWeight="bold"> Challenges Faced: </Text>
                <Text >{slide.challenges}</Text>
            </HStack>
            <HStack spacing={{"base":"2em", "md":"4em","lg":"1.5em"}}>
                <Icon as={SettingsIcon} />
                <Text fontWeight="bold"> Main Technologies: </Text>
                <Text fontSize="lg">{slide.technologies}</Text>
            </HStack>
            <HStack spacing={{"base":"2em", "md":"4em","lg":"1.5em"}}>
                <Icon as={TimeIcon} />
                <Text fontWeight="bold"> Time Invested: </Text>
                <Text fontSize="lg">{slide.time}</Text>
            </HStack>
        </VStack>
    </Box>
    {/* Customized Close Button */}
    <Box position="absolute" top="2%" right="2%" bg="white" borderRadius="50%" >
        <CloseButton size="lg" color="black" onClick={handleFlip} />
    </Box>
</>

)}

        </Box>
    );
}

function NavigationButton({ direction, handleClick }) {
    const isLeft = direction === "left";
    const Icon = isLeft ? ChevronLeftIcon : ChevronRightIcon;

    // Create a style object
    let buttonStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        variant: "ghost",
    };

    // Dynamically set the left or right property
    buttonStyle[isLeft ? "left" : "right"] = "2%";

    return (
        <Button
            {...buttonStyle}
            onClick={handleClick}
            _hover={{ backgroundColor: "transparent" }}
        >
            <Box bg="rgba(255,255,255,0.9)" borderRadius="50%" p={1}>
                <Icon w={{ base: "5", md: "6", lg: "9" }} h={{ base: "5", md: "6", lg: "9" }} color="darkred" />
            </Box>
        </Button>
    );
}

function CaptionCarousel({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setIsAutoScrolling(!isAutoScrolling); // Stop auto-scrolling when a slide is flipped
    };

    const handlePrev = () => {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
        setIsAutoScrolling(false); // Stop auto-scrolling on user interaction
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAutoScrolling(false); // Stop auto-scrolling on user interaction
    };

    useEffect(() => {
        let interval = null;
        if (isAutoScrolling && !isFlipped) {
            interval = setInterval(() => {
                setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
            }, 10000); // Auto-scroll every 10 seconds
        }

        // Resume autoscrolling after a period of inactivity
        const resumeAutoScroll = setTimeout(() => {
            setIsAutoScrolling(true);
        }, 15000); // 15 seconds of inactivity to resume autoscrolling

        return () => {
            clearInterval(interval);
            clearTimeout(resumeAutoScroll);
        };
    }, [isAutoScrolling, isFlipped, slides.length]);

    return (
        <Flex justifyContent="center" alignItems="center" w="100%" h="100%" transition="transform 0.6s" transform={isFlipped ? 'scale(1.1)' : 'scale(1)'}>
            <Slide
                slide={slides[currentSlide]}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleFlip={handleFlip}
                isFlipped={isFlipped}
            />
        </Flex>
    );
}

export default CaptionCarousel;
