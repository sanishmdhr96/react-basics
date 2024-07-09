/**
 * Functional components
 * Class components
 */
import { useState } from "react";
import Destructuring from "./components/Destructuring";
import Immutability from "./components/Immutability";

function App() {
  return (
    <div>
      {/* <Destructuring
        name="Sanish"
        email="mail.sanishmanandhar"
        address="Kathmandu"
        country="Nepal"
        state="Bagmati"
      /> */}

      <Immutability />
    </div>
  );
}

export default App;
