import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";

const Popup = ({ isOpen, onClose, position }) => {
  return (
    <Box position="absolute" bg="blue.400" left={position.x} top={position.y}>
      <Menu isOpen={isOpen}>
        <MenuList>
          <MenuItem>Waldo</MenuItem>
          <MenuItem>Walda</MenuItem>
          <MenuItem>Magician</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Popup;
