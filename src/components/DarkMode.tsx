import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const setLightMode = () => {
    //@ts-ignore
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const setDarkMode = () => {
    //@ts-ignore
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  //@ts-ignore
  const toggleDarkMode = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <label className="ui-switch">
      <input onChange={toggleDarkMode} type="checkbox" />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default DarkMode;
