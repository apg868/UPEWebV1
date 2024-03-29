import { Flex, Text, Image, VStack } from "@chakra-ui/react";

import placeholderAvatar from "./../../assets_folder/user.svg";

function MemberFrame({ student }) {
  const { name, title, major, year, image_path } = student;

  let avatar;
  let placeholder = false;

  try {
    avatar = require(`./../../assets_folder/student_images/${image_path}`);
  } catch {
    avatar = placeholderAvatar;
    placeholder = true;
  }

  return (
    <Flex bg="primaryGray" w="24rem" h="27rem" p="1rem" justifyContent="center" borderRadius="md">
      <VStack spacing="0.2rem">
        {!placeholder ? 
          <Image
            fit={"cover"}
            src={avatar}
            w="19rem"
            height="19rem"
            position="relative"
            borderRadius="md"
          />
          :
          <Image
            fit={"fill"}
            src={avatar}
            w="19rem"
            height="19rem"
            position="relative"
            borderRadius="md"
          />
        }
        <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
          <Text fontFamily="bannerFont" fontSize="md">
            {` ${name} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {` ${title} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="sm">
            {` ${major} `}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {` Class of ${year} `}
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default MemberFrame;
