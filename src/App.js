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
  let initialScores = [
    { name: "Jonathan Banks", time: 10.23 },
    { name: "James Dean", time: 6.11 },
    { name: "Sarah Connor", time: 3.23 },
    { name: "Bill Max", time: 1.23 },
    { name: "Tim Urban", time: 0.23 },
  ];

  const [foundCharacters, setFoundCharacters] = useState({
    waldo: false,
    wenda: false,
    magician: false,
  });
  const [totalTime, setTotalTime] = useState("no time");
  const [gameStart, setGameStart] = useState(false);
  const [allFound, setAllFound] = useState(false);
  const [startTime, setStartTime] = useState(undefined);
  const [playerScores, setPlayerScores] = useState(initialScores);

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
              setPlayerScores={setPlayerScores}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard playerScores={playerScores} />}
        />{" "}
      </Routes>
    </Router>
  );
}

export default App;
