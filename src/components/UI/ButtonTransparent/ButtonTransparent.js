import React from "react";
import classes from "./ButtonTransparent.css";

const ButtonTransparent = (props) => {
  return (
    <button
      className={classes.BtnSelection}
      style={{
        borderRadius: props.radius,
        color: props.color,
        borderColor: props.color,
        fontWeight: props.weight,
      }}
    >
      {props.children}
    </button>
  );
};

export default ButtonTransparent;
