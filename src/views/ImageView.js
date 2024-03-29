import { Box, Heading } from "@chakra-ui/layout";
import { Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import Popup from "../components/ui/Popup";
import FinishPopup from "../components/ui/FinishPopup";

import beach from "../img/beach.jpg";

const ImageView = ({
  allFound,
  totalTime,
  setFoundCharacters,
  setPlayerScores,
  database,
  gameOver,
  setGameOver,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageNaturalHeight, setImageNaturalHeight] = useState();
  const [relativeCoords, setRelativeCoords] = useState({ x: null, y: null });

  const { isOpen, onOpen, onClose } = useDisclosure();

  let waldoImage = useRef();
  const toast = useToast({
    variant: "solid",
  });

  const locations = {
    waldo: { pointA: { x: 1824, y: 711 }, pointB: { x: 1877, y: 789 } },
    wenda: { pointA: { x: 2296, y: 772 }, pointB: { x: 2344, y: 818 } },
    whitebeard: { pointA: { x: 783, y: 650 }, pointB: { x: 856, y: 747 } },
  };

  const displayMenu = (
    setMousePosition,
    onOpen,
    onClose,
    isOpen,
    mousePosition
  ) => {
    if (isOpen) {
      onClose();
    } else {
      setMousePosition(mousePosition);

      onOpen();
    }
  };

  const checkBounds = (clickedCoordinates, character) => {
    let characterCoords = locations[character];

    let topBounds =
      clickedCoordinates.x >= characterCoords.pointA.x &&
      clickedCoordinates.x <= characterCoords.pointB.x;
    let bottomBounds =
      clickedCoordinates.y >= characterCoords.pointA.y &&
      clickedCoordinates.y <= characterCoords.pointB.y;

    return topBounds && bottomBounds;
  };

  // useEffect(() => {
  //   let imageRef = waldoImage.current;
  //   setImageNaturalHeight(imageRef.naturalHeight);
  // }, []);

  function handleImgLoad(e) {
    let image = e.target;
    setImageNaturalHeight(image.naturalHeight);
  }

  function getMousePosition(e) {
    let mousePosition = { x: e.clientX, y: e.clientY };
    var bounds = e.target.getBoundingClientRect();

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

  const handleClick = (e) => {
    let character = e.target.value;
    let capitalized = character.charAt(0).toUpperCase() + character.slice(1);
    console.log(capitalized);
    let checkFound = checkBounds(relativeCoords, character);
    if (!checkFound) {
      onClose();
      toast({
        title: `Sorry, no ${capitalized} there.`,
        duration: 1800,
        position: "top",
      });
    } else {
      switch (character) {
        case "waldo":
          setFoundCharacters((prevState) => ({
            ...prevState,
            waldo: true,
          }));
          break;
        case "wenda":
          setFoundCharacters((prevState) => ({
            ...prevState,
            wenda: true,
          }));

          break;
        case "whitebeard":
          setFoundCharacters((prevState) => ({
            ...prevState,
            magician: true,
          }));

          break;
        default:
          alert("error in character finding");
          break;
      }
      onClose();
    }
  };

  return (
    <React.Fragment>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        mousePosition={mousePosition}
        handleClick={handleClick}
      />
      <FinishPopup
        totalTime={totalTime}
        allFound={allFound}
        setPlayerScores={setPlayerScores}
        database={database}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
      {/* <Modal isOpen={isOpenModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You Win!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Your time was {totalTime}</ModalBody>
          <ModalFooter>
            <Button onClick={onCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      <Image
        src={beach}
        value="waldoImage"
        onClick={getMousePosition}
        className="waldoImage"
        ref={waldoImage}
        onLoad={handleImgLoad}
      />
    </React.Fragment>
  );
};

export default ImageView;
