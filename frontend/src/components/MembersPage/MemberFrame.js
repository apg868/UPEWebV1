import { Flex, Text, Image, VStack } from "@chakra-ui/react";

import placeholderAvatar from "./../../assets_folder/user.svg";
import avator from "./../../assets_folder/avator.png";
function MemberFrame({ student }) {
  const { fullName, rank, major, classYear, imageUrl, company } = student;

  let avatar = imageUrl ?? avator;

  return (
    <Flex bg="#f4e7d0" w="24rem" h="23rem" p="1rem"  justifyContent="center" borderRadius="md" mb="2rem">
      <VStack spacing="0.2rem">
      <Image
          fit={"contain"}  // This will keep the entire image visible without cropping
          src={avatar}
          w="15rem"        // Adjust the width as needed to make the image smaller
          height="10rem"   // Adjust the height as needed
          position="relative"
          borderRadius="md"
          marginBottom="20px"
        />
        <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
        <Text fontFamily="bannerFont" fontSize="md" fontWeight="bold">
            {` ${fullName} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {` ${rank} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="sm">
            {` ${major} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {` Class of ${classYear} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
          {company ? `Company: ${company}` : ""}
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default MemberFrame;
