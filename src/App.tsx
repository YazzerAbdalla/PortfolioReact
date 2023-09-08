import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Animation from "./components/Animation";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Animation />
    </>
  );
}

export default App;
