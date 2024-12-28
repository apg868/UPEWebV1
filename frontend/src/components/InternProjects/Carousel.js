import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  VStack,
  Text,
  Flex,
  CloseButton,
  HStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  TimeIcon,
  SpinnerIcon,
  InfoIcon,
} from "@chakra-ui/icons";

function Slide({ slide, handlePrev, handleNext, handleFlip, isFlipped }) {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, content: "" });
  const [isLargerThanBase] = useMediaQuery("(min-width: 48em)");

  const handleModal = (content = "") => {
    setModalInfo({
      isOpen: !modalInfo.isOpen,
      content: content,
    });
  };

  return (
    <Box
      position="relative"
      w={isFlipped ? "75vw" : "75vw"}
      h={isFlipped ? "75vh" : "75vh"}
      bgImage={`url(${slide.image || ""})`}
      bgSize="cover"
      bgPosition="center"
    >
      {!isFlipped && (
        <>
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
            <Text
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              fontFamily="primaryFont"
              fontWeight="medium"
              color="white"
            >
              {slide.name}
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              fontFamily="secondaryFont"
              color="white"
            >
              {slide.description}
            </Text>
          </VStack>
          <NavigationButton direction="left" handleClick={handlePrev} />
          <NavigationButton direction="right" handleClick={handleNext} />
          <Button
            fontSize={{ base: "md" }}
            size={{ base: "xs", md: "md", lg: "lg" }}
            position="absolute"
            top={{ base: "0.5rem", md: "auto" }}
            left={{ base: "0.5rem", md: "auto" }}
            bottom={{ base: "auto", md: "0.5rem" }}
            right={{ base: "auto", md: "0.5rem" }}
            colorScheme="gray"
            onClick={handleFlip}
            _hover={{ backgroundColor: "secondaryRed", color: "white" }}
          >
            Read More
          </Button>
        </>
      )}

      {isFlipped && (
        <>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="70%"
            h="70%"
            bg="whiteAlpha.900"
            p={4}
            borderRadius="md"
            border="3px solid"
            borderColor="primaryRed"
            dropShadow="3px"
          >
            <VStack
              spacing={{ base: "1.5em", sm: "2em", md: "2em", lg: "3em" }}
              align="left"
              fontSize={{ base: "2xs", sm: "lg", md: "xs", lg: "sm" }}
              fontFamily="primaryFont"
              alignItems={{ base: "center", md: "flex-start" }}
              width="100%"
              height="100%"
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <HStack
                spacing={{ base: "2em", md: "2em", lg: "1.5em" }}
                onClick={() =>
                  isLargerThanBase
                    ? null
                    : handleModal(slide.extendedDescription)
                }
              >
                <Icon as={InfoIcon} />
                <Text fontWeight="bold">Extended Description</Text>
                {isLargerThanBase && <Text>{slide.extendedDescription}</Text>}
              </HStack>
              <HStack
                spacing={{ base: "2em", md: "2em", lg: "1.5em" }}
                onClick={() =>
                  isLargerThanBase ? null : handleModal(slide.skillsLearned)
                }
              >
                <Icon as={SpinnerIcon} />
                <Text fontWeight="bold">Skills Learned</Text>
                {isLargerThanBase && <Text>{slide.skillsLearned}</Text>}
              </HStack>
              <HStack
                spacing={{ base: "2em", md: "2em", lg: "1.5em" }}
                onClick={() =>
                  isLargerThanBase ? null : handleModal(slide.technologies)
                }
              >
                <Icon as={SettingsIcon} />
                <Text fontWeight="bold">Main Technologies</Text>
                {isLargerThanBase && <Text>{slide.technologies}</Text>}
              </HStack>
              <HStack
                spacing={{ base: "2em", md: "2em", lg: "1.5em" }}
                onClick={() =>
                  isLargerThanBase ? null : handleModal(slide.time)
                }
              >
                <Icon as={TimeIcon} />
                <Text fontWeight="bold">Time Invested</Text>
                {isLargerThanBase && <Text>{slide.time}</Text>}
              </HStack>
            </VStack>
          </Box>
          <Modal isOpen={modalInfo.isOpen} onClose={() => handleModal()}>
            <ModalOverlay />
            <ModalContent fontFamily="secondaryFont">
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>{modalInfo.content}</ModalBody>
            </ModalContent>
          </Modal>
          <Box
            position="absolute"
            top="2%"
            right="2%"
            bg="white"
            borderRadius="50%"
          >
            <CloseButton
              size={{ base: "md", md: "md", lg: "lg" }}
              color="black"
              onClick={handleFlip}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

function NavigationButton({ direction, handleClick }) {
  const isLeft = direction === "left";
  const Icon = isLeft ? ChevronLeftIcon : ChevronRightIcon;

  let buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    variant: "ghost",
    [isLeft ? "left" : "right"]: "2%",
  };

  return (
    <Button
      {...buttonStyle}
      onClick={handleClick}
      _hover={{ backgroundColor: "transparent" }}
    >
      <Box bg="rgba(255,255,255,0.9)" borderRadius="50%" p={1}>
        <Icon
          w={{ base: "5", md: "6", lg: "9" }}
          h={{ base: "5", md: "6", lg: "9" }}
          color="darkred"
        />
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
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoScrolling(false); // Stop auto-scrolling on user interaction
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoScrolling(false); // Stop auto-scrolling on user interaction
  };

  useEffect(() => {
    let interval = null;
    if (isAutoScrolling && !isFlipped) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
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
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      transition="transform 0.6s"
      transform={isFlipped ? "scale(1.1)" : "scale(1)"}
    >
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