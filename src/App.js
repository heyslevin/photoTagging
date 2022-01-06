import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Navbar from "./components/layout/Navigation";

import ImageView from "./views/ImageView";
import Leaderboard from "./views/Leaderboard";
import Welcome from "./views/Welcome";

function App() {
  const [foundWaldo, setFoundWaldo] = useState(false);
  const [foundWenda, setFoundWenda] = useState(false);
  const [foundMagician, setFoundMagician] = useState(false);
  const [initialTime, setInitialTime] = useState("no time");
  const [gameStart, setGameStart] = useState(false);

  return (
    <Router>
      <Navbar
        foundWaldo={foundWaldo}
        foundWenda={foundWenda}
        foundMagician={foundMagician}
        initialTime={initialTime}
        gameStart={gameStart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              setInitialTime={setInitialTime}
              setGameStart={setGameStart}
            />
          }
        />
        <Route
          path="/game"
          element={
            <ImageView
              setFoundWaldo={setFoundWaldo}
              setFoundWenda={setFoundWenda}
              setFoundMagician={setFoundMagician}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
