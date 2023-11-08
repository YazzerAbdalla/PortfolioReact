import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Animation from "./components/Animation/Animation";
import About from "./components/About/About";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      // Theme set to dark.
      //@ts-ignore
      document.querySelector("body").setAttribute("data-theme", "dark");
      setDark(true);
    } else {
      // Theme set to light.
      //@ts-ignore
      document.querySelector("body").setAttribute("data-theme", "light");
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header dark={dark} />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Animation />
        </>
      )}
    </>
  );
}

export default App;
