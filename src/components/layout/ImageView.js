import { Box, Heading } from "@chakra-ui/layout";
import { Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";

import Popup from "../ui/Popup";

import beach from "../../img/beach.jpg";

function displayMenu(setMousePosition, onOpen, onClose, isOpen, mousePosition) {
  if (isOpen) {
    onClose();
  } else {
    setMousePosition(mousePosition);

    onOpen();
  }
}

function roundDown(num) {
  return Math.round(num * 100) / 100;
}

const ImageView = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageNaturalHeight, setImageNaturalHeight] = useState();
  const [relativeCoords, setRelativeCoords] = useState({ x: null, y: null });

  const { isOpen, onOpen, onClose } = useDisclosure();

  let waldoImage = useRef();

  const locations = {
    waldo: { pointA: { x: 1824, y: 711 }, pointB: { x: 1877, y: 789 } },
    wenda: { pointA: { x: 2296, y: 772 }, pointB: { x: 2344, y: 818 } },
    whitebeard: { pointA: { x: 783, y: 650 }, pointB: { x: 856, y: 747 } },
  };

  const checkBounds = (clickedCoordinates, character) => {
    let characterCoords = locations[character];

    let topBounds =
      clickedCoordinates.x >= characterCoords.pointA.x &&
      clickedCoordinates.x <= characterCoords.pointB.x;
    let bottomBounds =
      clickedCoordinates.y >= characterCoords.pointA.y &&
      clickedCoordinates.y <= characterCoords.pointB.y;

    let found = topBounds && bottomBounds;

    alert(`${character} was ${found}`);
  };

  useEffect(() => {
    let imageRef = waldoImage.current;
    setImageNaturalHeight(imageRef.naturalHeight);
  }, []);

  function getMousePosition(e) {
    let mousePosition = { x: e.clientX, y: e.clientY };
    var bounds = e.target.getBoundingClientRect();
    console.log(mousePosition);

    let currentHeight = waldoImage.current.height;

    // Rounds to 2 decimal points (Math.round(num * 100) / 100)
    let imageProportion = currentHeight / imageNaturalHeight;

    // Proportional mousemousePosition of mouse on image
    var x = Math.floor((e.clientX - bounds.left) / imageProportion);
    var y = Math.floor((e.clientY - bounds.top) / imageProportion);
    console.log(x, y);
    setRelativeCoords({ x: x, y: y });

    displayMenu(setMousePosition, onOpen, onClose, isOpen, mousePosition);
    setShowMenu(true);
  }

  return (
    <React.Fragment>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        mousePosition={mousePosition}
        relativeCoords={relativeCoords}
        checkBounds={checkBounds}
      />
      <Image
        src={beach}
        value="waldoImage"
        onClick={getMousePosition}
        className="waldoImage"
        ref={waldoImage}
      />
    </React.Fragment>
  );
};

export default ImageView;
