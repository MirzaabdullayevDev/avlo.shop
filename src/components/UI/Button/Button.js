import React from "react";
import classes from "./Button.css";

const Button = (props) => {
  return (
    <button className={classes.BuyBtn} style={{ padding: props.padding }}>
      {props.children}
    </button>
  );
};

export default Button;
