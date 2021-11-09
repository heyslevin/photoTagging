import { ChakraProvider } from "@chakra-ui/react";

import { Container, Heading } from "@chakra-ui/react";
import ImageView from "./components/layout/ImageView";
import Navbar from "./components/layout/Navigation";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ImageView />
    </ChakraProvider>
  );
}

export default App;
