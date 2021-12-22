import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Flex, Heading, HStack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { motion } from "framer-motion";

import waldoImage from "../../img/characters/waldo.png";
import wendaImage from "../../img/characters/wenda.png";
import whitebeardImage from "../../img/characters/whitebeard.png";

const AvatarBox = motion(Avatar);

const Navbar = ({ foundWaldo, foundWenda, foundMagician }) => {
  const variants = {
    found: {
      backgroundColor: "green",
      scale: [1, 0.5, 1.2, 0.5, 1],
    },
    notFound: { backgroundColor: "gray" },
  };

  return (
    <HStack p={4}>
      <Flex flex="1" justify="flex-start">
        <HStack>
          <Link as={RouterLink} to="/game">
            Find Waldo
          </Link>
          <AvatarBox
            name="Waldo"
            src={waldoImage}
            whileHover={{ scale: 1.1 }}
            variants={variants}
            animate={foundWaldo ? "found" : "notFound"}
          />
          <AvatarBox
            name="Wenda"
            src={wendaImage}
            variants={variants}
            animate={foundWenda ? "found" : "notFound"}
          />
          <AvatarBox
            name="Magician"
            src={whitebeardImage}
            variants={variants}
            animate={foundMagician ? "found" : "notFound"}
          />
        </HStack>
      </Flex>
      <Flex flex="1" justify="center">
        <Center>
          <Heading as={RouterLink} to="/game">
            Where's Waldo?
          </Heading>
        </Center>
      </Flex>
      <Flex flex="1" justify="flex-end">
        <Text pr={30} color="gray.500">
          1:00
        </Text>
        <Link as={RouterLink} to="/leaderboard">
          View Leaderboard
        </Link>
      </Flex>
    </HStack>
  );
};

export default Navbar;
