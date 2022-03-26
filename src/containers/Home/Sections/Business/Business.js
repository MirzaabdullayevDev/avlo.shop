import React, { Component } from "react";
import classes from "./Business.css";
import Button from "../../../../components/UI/Button/Button";

class Business extends Component {
  render() {
    return <section className={classes.Business}>
        <h2 className={classes.BusinessTitle}>O’z biznesingizni biz bilan hoziroq boshlang!</h2>
        <Button padding="20px 36px">Do'kon yaratish</Button>
    </section>;
  }
}

export default Business;
