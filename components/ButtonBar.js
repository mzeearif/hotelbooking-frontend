import React from "react";
import classes from "./ButtonBar.module.css";

const ButtonBar = (props) => {
  return (
    <div className={classes.buttonBar}>
         <span onClick={() => props.handleLeft()}><i className="bi bi-arrow-90deg-left"></i></span>
      <span className={classes.border_right} onClick={() => props.handleRight()}><i className="bi bi-arrow-90deg-right"></i></span>
      <span onClick={() => props.handleBold()}><i><b>B</b></i></span>
      <span className={classes.border_right} onClick={() => props.handleItalic()}><i><b>I</b></i></span>
      <span onClick={() => props.handleCenter()}>Center</span>
     
      <span className={classes.border_right} onClick={() => props.handleCapitalize()}>Capitalize</span>
      <span onClick={() => props.handleLowercase()}>Lowercase</span>
    </div>
  );
};

export default ButtonBar;




