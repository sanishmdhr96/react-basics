/**
 * Functional components
 * Class components
 */
import { useState } from "react";
import Destructuring from "./components/Destructuring";

function App() {
  return (
    <div>
      <Destructuring
        name="Sanish"
        email="mail.sanishmanandhar"
        address="Kathmandu"
        country="Nepal"
        state="Bagmati"
      />
    </div>
  );
}

export default App;
