import { Box, Heading } from "@chakra-ui/layout";
import { Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Popup from "../ui/Popup";

import beach from "../../img/beach.jpg";

function mousePosition(onOpen, setPosition) {
  document.addEventListener("mousemove", function (e) {
    logKey(e, onOpen, setPosition);
  });
}

function logKey(e, onOpen, setPosition) {
  let position = { x: e.clientX, y: e.clientY };
  document.addEventListener("click", () =>
    displayMenu(position, onOpen, setPosition)
  );
}

function displayMenu(position, onOpen, setPosition) {
  onOpen();
  setPosition(position);
}

const ImageView = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //NEXT, feed setPosition to click event

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    mousePosition(onOpen, setPosition);
  }, []);
  return (
    <React.Fragment>
      <Popup isOpen={isOpen} onClose={onClose} position={position} />
      <Image src={beach} />
    </React.Fragment>
  );
};

export default ImageView;
