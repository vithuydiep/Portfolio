import React, { useContext } from "react";
import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="toggle">
      <Sun />
      <Moon />
      <div
        className="t-button"
        onClick={() => {
          theme.dispatch({ type: "toggle" });
        }}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
