import React, { useRef } from "react";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

const Header = ({ dark }: { dark: boolean }) => {
  const navRef = useRef<HTMLDivElement | null>(null);

  const showNavBar = () => {
    //@ts-ignore
    navRef.current.classList.toggle("responsive");
  };
  const theUrl = window.location.href;
  return (
    <>
      <header>
        <a className="logo" href="#">
          Yasser
        </a>
        <DarkMode dark={dark} />
        <div className="nav" ref={navRef}>
          <a href="#about" onClick={showNavBar}>
            About me
          </a>
          <a href="#skills" onClick={showNavBar}>
            Skills
          </a>
          <a href="#projects" onClick={showNavBar}>
            Projects
          </a>
          <a href="#contacts" onClick={showNavBar}>
            Contacts
          </a>
          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
        <button onClick={showNavBar} id="navBtn" className="nav-btn ">
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
      <div className="blog-progress"></div>
    </>
  );
};

export default Header;
