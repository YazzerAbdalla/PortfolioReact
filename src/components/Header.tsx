import React, { useRef } from "react";
import "./header.css";
interface Props {
  onClick?: () => void;
}
const Header = ({ onClick }: Props) => {
  const navRef = useRef(HTMLDivElement);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive");
  };
  return (
    <>
      <header>
        <a className="logo" href="#">Yasser</a>
        <div className="nav" ref={navRef}>
          <a href="#projects" onClick={showNavBar}>
            Projects
          </a>
          <a href="#skills" onClick={showNavBar}>
            Skills
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
    </>
  );
};

export default Header;
