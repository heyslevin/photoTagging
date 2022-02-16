import {
  Button,
  Center,
  Heading,
  List,
  ListItem,
  VStack,
  Text,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Welcome = ({ setInitialTime, setGameStart, handleStartClick }) => {
  return (
    <Center h="500px">
      <VStack>
        <Heading mb={10} size="4xl" align="center">
          Welcome to the Game
        </Heading>
        <Box>
          <Text pb={3}>Ther rules are simple:</Text>
          <List pb={10}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Find all 3 Characters
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              The faster the better!
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} />
              Compare your time against others
            </ListItem>
          </List>
        </Box>
        <Center>
          <Button
            background="purple.500"
            align="center"
            as={RouterLink}
            to="/game"
            onClick={handleStartClick}
          >
            Get Started
          </Button>
        </Center>
      </VStack>
    </Center>
  );
};

export default Welcome;
