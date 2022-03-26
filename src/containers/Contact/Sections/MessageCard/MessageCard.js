import React, { Component } from "react";
import classes from "./MessageCard.css";
import { Col } from "react-bootstrap";

const Informs = [
  {
    title: "Manzil:",
    href1: "#!",
    href2: "#!",
    text1: "27 Division St, New York",
    text2: "NY 10002, USA",
    icon: "fas fa-map-marker-alt",
  },
  {
    title: "E-mail:",
    href1: "#!",
    href2: "#!",
    text1: "info@mail.com",
    text2: "contact@mail.com",
    icon: "fas fa-envelope",
  },
  {
    title: "Telefon:",
    href1: "tel:+998 90 253 77 53",
    href2: "tel:+998 90 253 77 53",
    text1: "+998 90 253 77 53",
    text2: "+998 90 253 77 53",
    icon: "fas fa-phone-alt",
  },
];

class MessageCard extends Component {
  renderCardInform() {
    return Informs.map((inform, index) => {
      return (
        <div className={classes.CardInform} key={index}>
          <div className={classes.LocationIcon}>
            <i className={inform.icon}></i>
          </div>
          <div className={classes.BoxInform}>
            <h4 className={classes.InfoTextTop}>{inform.title}</h4>
            <a href={inform.href1}>{inform.text1}</a>
            <a href={inform.href2}>{inform.text2}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <Col
        md="8"
        lg="5"
        xl="4"
        xs="12"
        sm="9"
        className={classes.MessageCardCol}
      >
        <div className={classes.MessageCard}>
          <h2 className={classes.CardTitle}>Ma’lumotlar</h2>
          <p className={classes.CardText}>
            therefore always free from repetition, injected humour, or
            non-characteristic
          </p>
          <hr />
          {this.renderCardInform()}
        </div>
      </Col>
    );
  }
}

export default MessageCard;
