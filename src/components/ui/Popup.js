import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Heading, Link } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";

const Popup = ({
  isOpen,
  onClose,
  mousePosition,
  relativeCoords,
  checkBounds,
}) => {
  let checkCoordinates = (e) => {
    let character = e.target.value;
    console.log(character);
  };

  const handleClick = (e) => {
    let character = e.target.value;
    console.log(character);
    checkBounds(relativeCoords, character);
  };

  return (
    <Box
      position="absolute"
      bg="blue.400"
      left={mousePosition.x}
      top={mousePosition.y}
    >
      <Menu isOpen={isOpen}>
        <MenuList onMouseLeave={onClose}>
          <MenuItem onClick={checkBounds} value="nothing">
            Position is {JSON.stringify(relativeCoords)}
          </MenuItem>
          <MenuItem onClick={handleClick} value="waldo">
            Waldo
          </MenuItem>
          <MenuItem onClick={checkCoordinates} value="wenda">
            Walda
          </MenuItem>
          <MenuItem onClick={checkCoordinates} value="whitebeard">
            Magician
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Popup;
