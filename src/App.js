import { ChakraProvider } from "@chakra-ui/react";

import { Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import ImageView from "./components/layout/ImageView";
import Navbar from "./components/layout/Navigation";

import { getFirestore } from "firebase/firestore/lite";

import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

console.log(process.env.REACT_APP_apiKey);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Sign in me
console.log(process.env.REACT_APP_email);
signInWithEmailAndPassword(
  auth,
  process.env.REACT_APP_email,
  process.env.REACT_APP_password
)
  .then((userCredential) => {
    //Signed in
    const user = userCredential.user;
    console.log("Signed in");
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.errorCode;
    const errorMessage = error.message;
    console.log("Could not sign in");
    console.log(errorMessage);
  });

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
