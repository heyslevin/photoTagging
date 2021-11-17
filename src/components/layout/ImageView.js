import { Box, Heading } from "@chakra-ui/layout";
import { Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Popup from "../ui/Popup";

import beach from "../../img/beach.jpg";

function displayMenu(position, onOpen, onClose, setPosition, openMenu) {
  if (!openMenu) {
    onClose();
  }
  onOpen();
  setPosition(position);
}

const ImageView = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //NEXT, feed setPosition to click event

  const { isOpen, onOpen, onClose } = useDisclosure();

  function getMousePosition(e) {
    let position = { x: e.clientX, y: e.clientY };
    let openMenu = e.target.closest("#menu-list-6");

    displayMenu(position, onOpen, onClose, setPosition, openMenu);
  }

  useEffect(() => {
    document.addEventListener("click", getMousePosition);
    return () => {
      document.removeEventListener("click", getMousePosition);
    };
  });
  return (
    <React.Fragment>
      <Popup isOpen={isOpen} onClose={onClose} position={position} />
      <Image src={beach} />
    </React.Fragment>
  );
};

export default ImageView;
