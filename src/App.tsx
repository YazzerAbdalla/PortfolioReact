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
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Animation />
    </>
  );
}

export default App;
