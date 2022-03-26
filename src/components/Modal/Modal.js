import React from "react";
import ModalBody from "./ModalBody/ModalBody";
import classes from "./Modal.css";

const Modal = (props) => {
  const cls = [
    classes.ModalBg,
  ]

  if (props.isOpen) {
    cls.push(classes.open)
  } else {
    cls.push(classes.close)
  }

  return (
    <React.Fragment>
      <div className={cls.join(' ')} onClick={props.onToggle}></div>
      <ModalBody
        isOpen={props.isOpen}
        onToggle={props.onToggle}
      />
    </React.Fragment>
  );
}

export default Modal;
