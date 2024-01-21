import { Flex, Text, Image, VStack } from "@chakra-ui/react";

import placeholderAvatar from "./../../assets_folder/user.svg";

function MemberFrame({ student, image }) {
  const name = student.name;
  const title = student.title ?? null;
  const major = student.major ?? null;
  const year = student.year ?? null;

  var avatar;

  try {
    avatar = require(`./../../assets_folder/student_images/${image}`);
  } catch {
    avatar = placeholderAvatar;
  }

  return (
    <Flex bg="primaryGray" w="24rem" h="27rem" p="1rem" justifyContent="center">
      <VStack spacing="0.2rem">
        <Image
          fit={"cover"}
          src={avatar}
          w="19rem"
          height="19rem"
          position="relative"
        />
        <VStack spacing="0.1rem" marginLeft="0.5rem" marginRight="0.5rem">
          <Text fontFamily="bannerFont" fontSize="md">
            {" "}
            {name}{" "}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {" "}
            {title}
          </Text>
          <Text fontFamily="bannerFont" fontSize="sm">
            {" "}
            {major}{" "}
          </Text>
          <Text fontFamily="bannerFont" fontSize="md">
            {" "}
            {year && "Class of "}
            {year}{" "}
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default MemberFrame;
