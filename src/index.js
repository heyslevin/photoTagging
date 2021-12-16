import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import authInit from "./utilities/auth";
import { ChakraProvider } from "@chakra-ui/react";

authInit();

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
