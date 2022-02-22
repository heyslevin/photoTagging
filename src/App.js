import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Navbar from "./components/layout/Navbar";

import ImageView from "./views/ImageView";
import Leaderboard from "./views/Leaderboard";
import Welcome from "./views/Welcome";

import auth from "./utilities/auth";

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

const App = ({ initialScores }) => {
  const [foundCharacters, setFoundCharacters] = useState({
    waldo: false,
    wenda: false,
    magician: false,
  });
  const [totalTime, setTotalTime] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [allFound, setAllFound] = useState(false);
  const [startTime, setStartTime] = useState(undefined);
  const [playerScores, setPlayerScores] = useState(initialScores);
  const [database, setDatabase] = useState("none");
  const [gameOver, setGameOver] = useState(false);

  //Handle Start Click in Welcome
  const handleStartClick = () => {
    setStartTime(new Date().getTime());
    console.log(startTime);
    setGameStart(true);
  };

  useEffect(() => {
    document.title = "🔍 Find Waldo";
  }, []);

  //Wait for load on async
  useEffect(() => {
    async function loadData() {
      let authMethods = await auth();
      const login = await authMethods.authInit();
      const initialScores = await authMethods.initialDataLoad();
      setPlayerScores(initialScores);
      setDatabase(authMethods.db);
    }

    loadData();
  }, []);

  //Write new data into

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
              database={database}
              gameOver={gameOver}
              setGameOver={setGameOver}
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
};

export default App;
