import React, { useEffect } from "react";
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
  const sortPlayers = (scores) => {
    return scores.sort(function (a, b) {
      if (a["time"] < b["time"]) {
        return -1;
      } else if (a["time"] > b["time"]) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  let scoreList;

  if (playerScores) {
    let sortedScores = sortPlayers(playerScores);

    scoreList = sortedScores.map((player) => {
      console.log(player);
      return (
        <Tr key={player.name}>
          <Td>{player.name}</Td>
          <Td isNumeric>{player.time}</Td>
        </Tr>
      );
    });
  }

  let loading = (
    <Tr>
      <Td>Loading...</Td>
      <Td></Td>
    </Tr>
  );

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
        <Tbody>{scoreList === undefined ? loading : scoreList}</Tbody>
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
