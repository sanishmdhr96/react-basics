/**
 * Functional components
 * Class components
 */
import Footer from "./components/Footer";
import MyHeader, { SubHeader } from "./components/Header";

function App() {
  var greetings = "Hi";

  function setGreetings() {
    greetings = "Hi !";
  }

  return (
    <div>
      <MyHeader />
      <SubHeader />
      <p>{greetings}</p>
      <button onClick={setGreetings}>Greetings</button>
      <Footer />
    </div>
  );
}

export default App;
