import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Navbar from "./components/layout/Navbar";

import ImageView from "./views/ImageView";
import Leaderboard from "./views/Leaderboard";
import Welcome from "./views/Welcome";

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
import { useEffect } from "react";

function App() {
  // const [foundWaldo, setFoundWaldo] = useState(false);
  // const [foundWenda, setFoundWenda] = useState(false);
  // const [foundMagician, setFoundMagician] = useState(false);

  const [foundCharacters, setFoundCharacters] = useState({
    waldo: false,
    wenda: false,
    magician: false,
  });
  const [totalTime, setTotalTime] = useState("no time");
  const [gameStart, setGameStart] = useState(false);
  const [allFound, setAllFound] = useState(false);
  const [startTime, setStartTime] = useState(undefined);

  //Handle Start Click in Welcome
  const handleStartClick = () => {
    setStartTime(new Date().getTime());
    console.log(startTime);
    setGameStart(true);
  };

  //Check for Endgame
  useEffect(() => {
    if (
      foundCharacters.waldo &&
      foundCharacters.wenda &&
      foundCharacters.magician
    ) {
      console.log(startTime);
      let endTime = new Date().getTime();
      setTotalTime((endTime - startTime) / 1000);
      setAllFound(true);
    }
  }, [foundCharacters]);

  return (
    <Router>
      <Navbar
        foundCharacters={foundCharacters}
        gameStart={gameStart}
        allFound={allFound}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              handleStartClick={handleStartClick}
              setGameStart={setGameStart}
            />
          }
        />
        <Route
          path="/game"
          element={
            <ImageView
              allFound={allFound}
              totalTime={totalTime}
              setFoundCharacters={setFoundCharacters}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
