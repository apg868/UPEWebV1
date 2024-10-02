import { Flex, Text, Image, VStack } from "@chakra-ui/react";

import placeholderAvatar from "./../../assets_folder/user.svg";

function MemberFrame({ student }) {
  const { fullName, rank, major, classYear, imageUrl, company } = student;

  let avatar = imageUrl ?? placeholderAvatar;

  return (
    <Flex bg="#f4e7d0" w="24rem" h="27rem" p="1rem"  justifyContent="center" borderRadius="md" mb="2rem">
      <VStack spacing="0.2rem">
      <Image
            fit={"cover"}
            src={avatar}
            w="19rem"
            height="19rem"
            position="relative"
            borderRadius="md"
          />
        <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
          <Text fontFamily="bannerFont" fontSize="md" >
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
