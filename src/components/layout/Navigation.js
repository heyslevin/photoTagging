import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <HStack p={4}>
      <Flex flex="1" justify="flex-start">
        <HStack>
          <Text>Find Waldo</Text>
          <Avatar name="Waldo" />
          <Avatar name="Magician" />
          <Avatar name="C" />
        </HStack>
      </Flex>
      <Flex flex="1" justify="center">
        <Center>
          <Heading>Where's Waldo?</Heading>
        </Center>
      </Flex>
      <Flex flex="1" justify="flex-end">
        <Link href="www.firmalt.com">View Leaderboard</Link>
      </Flex>
    </HStack>
  );
};

export default Navbar;
