import React from "react";
import {
  VStack,
  Heading,
  Box,
  Text,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Container,
  Tfoot,
  TableCaption,
} from "@chakra-ui/react";

const Leaderboard = ({ playerScores }) => {
  console.log(playerScores);
  const scoreList = playerScores.map((player) => {
    console.log(player);
    return (
      <Tr key={player.name}>
        <Td>{player.name}</Td>
        <Td isNumeric>{player.time}</Td>
      </Tr>
    );
  });

  return (
    <Container border="1px" borderRadius="md" mt={10}>
      <Table variant="striped" colorScheme="gray">
        <TableCaption placement="top">Player Leaderboard</TableCaption>
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th isNumeric>Time</Th>
          </Tr>
        </Thead>
        <Tbody>{scoreList}</Tbody>
        <Tfoot>
          <Tr>
            <Th> </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  );
};

export default Leaderboard;
