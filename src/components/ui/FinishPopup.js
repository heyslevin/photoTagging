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
import { useEffect } from "react";

const FinishPopup = ({ totalTime, allFound }) => {
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

  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>You Win!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Your time was
          <Heading size="3xl">{totalTime}</Heading>
        </ModalBody>
        <ModalFooter>
          <Input mr={2} placeholder="Enter your name"></Input>
          <Button onClick={onCloseModal}>Save Score</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FinishPopup;
