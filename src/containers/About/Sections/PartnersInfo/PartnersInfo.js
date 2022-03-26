import React, { Component } from "react";
import classes from "./PartnersInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./images/unnamed.jpg";
import img2 from "./images/faktor.png";
import img3 from "./images/unnamed.png";
import img4 from "./images/batezeck.jpg";

const partners = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];

class PartnersInfo extends Component {
  renderPartners() {
    return partners.map((partner, index) => {
      return (
        <Col xs="3" md="2" key={index}>
          <div className={classes.PartnersImg}>
            <img className={classes.PartnersImg} src={partner.img} alt="logo" />
          </div>
        </Col>
      );
    });
  }
  render() {
    return (
      <section className={classes.PartnersInfo}>
        <Container>
          <h2 className={classes.PartnersTitle}>Hamkorlarimiz</h2>
          <Row style={{ justifyContent: "space-evenly" }}>
            {this.renderPartners()}
          </Row>
        </Container>
      </section>
    );
  }
}

export default PartnersInfo;
