import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";

const Popup = ({ isOpen, onClose, position }) => {
  let checkCoordinates = (e) => {
    let character = e.target.value;
    console.log(character);
  };
  return (
    <Box position="absolute" bg="blue.400" left={position.x} top={position.y}>
      <Menu isOpen={isOpen}>
        <MenuList onMouseLeave={onClose}>
          <MenuItem onClick={checkCoordinates} value="Waldo">
            Waldo
          </MenuItem>
          <MenuItem onClick={checkCoordinates} value="Walda">
            Walda
          </MenuItem>
          <MenuItem onClick={checkCoordinates} value="Magician">
            Magician
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Popup;
