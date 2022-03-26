import React, { Component } from "react";
import classes from "./BuyCard.css";
import { Container, Row } from "react-bootstrap";
import CardPrice from "../../../../components/Card/Card";
import Button from "../../../../components/UI/Button/Button";

class BuyCard extends Component {
  render() {
    return (
      <section className={classes.BuyCard}>
        <Container>
          <Row style={{ justifyContent: "center" }}>
            <CardPrice BgColor="#F3F4F6" />
          </Row>
          <div className={classes.BuyCardBtn}>
            <Button padding="20px 40px">Barcha imkoniyatlar</Button>
          </div>
        </Container>
      </section>
    );
  }
}

export default BuyCard;
