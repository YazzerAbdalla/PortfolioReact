import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./components/Main";
import Projects from "./components/Projects";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Main />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
