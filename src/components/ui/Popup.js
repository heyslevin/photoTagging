import { Box } from "@chakra-ui/layout";
import { Menu, MenuItem, MenuList } from "@chakra-ui/menu";

const Popup = ({ isOpen, onClose, mousePosition, handleClick }) => {
  return (
    <Box
      position="absolute"
      bg="blue.400"
      left={mousePosition.x}
      top={mousePosition.y}
    >
      <Menu isOpen={isOpen}>
        <MenuList onMouseLeave={onClose}>
          <MenuItem onClick={handleClick} value="waldo">
            Waldo
          </MenuItem>
          <MenuItem onClick={handleClick} value="wenda">
            Wenda
          </MenuItem>
          <MenuItem onClick={handleClick} value="whitebeard">
            Magician
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Popup;
