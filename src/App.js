import { ChakraProvider } from "@chakra-ui/react";

import { Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ImageView from "./components/layout/ImageView";
import Navbar from "./components/layout/Navigation";

function App() {
  const [foundWaldo, setFoundWaldo] = useState(false);
  const [foundWenda, setFoundWenda] = useState(false);
  const [foundMagician, setFoundMagician] = useState(false);

  return (
    <ChakraProvider>
      <Navbar
        foundWaldo={foundWaldo}
        foundWenda={foundWenda}
        foundMagician={foundMagician}
      />
      <ImageView
        setFoundWaldo={setFoundWaldo}
        setFoundWenda={setFoundWenda}
        setFoundMagician={setFoundMagician}
      />
    </ChakraProvider>
  );
}

export default App;
