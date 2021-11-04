import { ChakraProvider } from "@chakra-ui/react";

import { Container, Heading } from "@chakra-ui/react";
import Navbar from "./components/layout/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
