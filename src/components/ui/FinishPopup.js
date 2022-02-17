import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const FinishPopup = ({ totalTime, allFound, setPlayerScores }) => {
  const [name, setName] = useState();

  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  //Check if Game Over
  useEffect(() => {
    if (allFound) {
      if (!isOpenModal) {
        onOpenModal();
      }
    }
    console.log(allFound);
  }, [allFound]);

  const handleSaveClick = () => {
    setPlayerScores((prevState) => [
      ...prevState,
      { name: name, time: totalTime },
    ]);
    onCloseModal();
  };

  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>You Win!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Your time was
          <Heading size="3xl" color="green.300">
            {totalTime}
          </Heading>
        </ModalBody>
        <ModalFooter>
          <Input
            mr={2}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Button as={RouterLink} onClick={handleSaveClick} to="/leaderboard">
            Save Score
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FinishPopup;
