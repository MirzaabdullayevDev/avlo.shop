import React, { Component } from "react";
import classes from "./Offers.css";
import { Container, Row } from "react-bootstrap";
import CardPrice from "../../../components/Card/Card";

class Offers extends Component {
  render() {
    const cls = [classes.Offers, classes.BuyCards];

    return (
      <section className={cls.join(" ")}>
        <Container>
          <h2 className={classes.OfferTitle}>Biz taklif qilayotgan narxlar</h2>
          <Row style={{ justifyContent: "center" }}>
            <CardPrice BgColor="#fff" />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Offers;
