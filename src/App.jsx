/**
 * Functional components
 * Class components
 */
import { useState } from "react";
import Counter from "./components/Counter";
import ReactCycle from "./components/ClassComp";

function App() {
  // let greetings = "";
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Sanish Manandhar");

  return (
    <div>
      {counter > 0 && <ReactCycle name={name} />}
      <button onClick={() => setName("New name")}>Greetings</button>
      <button onClick={() => setCounter(1)}>setCounter</button>
      <button onClick={() => setCounter(0)}>removeCounter</button>
      <Counter count={counter} />
    </div>
  );
}

export default App;
