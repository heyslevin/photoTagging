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

const Leaderboard = () => {
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
        <Tbody>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
          <Tr>
            <Td>James Donovan</Td>
            <Td isNumeric>3.05s</Td>
          </Tr>
        </Tbody>
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
