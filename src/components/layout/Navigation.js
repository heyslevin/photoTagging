import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";

import waldoImage from "../../img/characters/waldo.png";
import wendaImage from "../../img/characters/wenda.png";
import whitebeardImage from "../../img/characters/whitebeard.png";

const Navbar = ({ foundWaldo, foundWenda, foundMagician }) => {
  return (
    <HStack p={4}>
      <Flex flex="1" justify="flex-start">
        <HStack>
          <Text>Find Waldo</Text>
          <Avatar
            bg={foundWaldo ? "green" : "red"}
            name="Waldo"
            src={waldoImage}
          />
          <Avatar
            bg={foundWenda ? "green" : "red"}
            name="Wenda"
            src={wendaImage}
          />
          <Avatar
            bg={foundMagician ? "green" : "red"}
            name="Magician"
            src={whitebeardImage}
          />
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
