/**
 * Functional components
 * Class components
 */
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  // let greetings = "";
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Greetings
      </button>
      <Counter count={counter} />
    </div>
  );
}

export default App;
