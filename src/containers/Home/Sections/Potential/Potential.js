import React, { Component } from "react";
import classes from "./Potential.css";
import { Container, Row, Col } from "react-bootstrap";
import freeIcon from "./images/free-2.svg";
import chart from "./images/pie-chart.svg";
import headPhones from "./images/headphones1.svg";
import secure from "./images/secure.svg";
import groupImg from "./images/Group71.svg";
import email from "./images/email-1.svg";
import adaptive from "./images/Group70.svg";
import colImg from "./images/Group-39.svg";

const boxes = [
  {
    cols: [
      {
        icon: freeIcon,
        text: "Bepul tarif",
      },
      {
        icon: chart,
        text: "Har qanday saytga o'rnatish oson",
      },
      {
        icon: headPhones,
        text: "24/7 qo'llab-quvvatlash",
      },
      {
        icon: secure,
        text: "To'liq xavfsizlik.",
      },
    ],
  },
  {
    cols: [
      {
        icon: groupImg,
        text: "Ko'p vitrinalar - bitta administrator paneli.",
      },
      {
        icon: email,
        text: "Savdolarni boshlanishi uchun tayyor sayt.",
      },
      {
        icon: adaptive,
        text: "Adaptiv dizayn.",
      },
      {
        icon: colImg,
        text: "Savdo bo'yicha hisobotlar va tahlillar.",
      },
    ],
  },
];

class Potential extends Component {
  renderCols(box) {
    return box.cols.map((col, index) => {
      return (
        <Col sm="9" md="6" xl="3" xs="12" key={index}>
          <button className={classes.Box}>
            <p className={classes.BoxText}>
              <span className={classes.BoxIcon}>
                <img src={col.icon} alt="" />
              </span>
              {col.text}
            </p>
          </button>
        </Col>
      );
    });
  }

  renderBoxes() {
    return boxes.map((box, index) => {
      let cls;
      index === 0 ? (cls = classes.FirstRow) : (cls = "");
      return (
        <Row style={{ justifyContent: "center" }} key={index} className={cls}>
          {this.renderCols(box)}
        </Row>
      );
    });
  }

  render() {
    return (
      <section className={classes.Potential}>
        <Container>
          <h2 className={classes.TitlePotential}>
            Biz taklif qilayotgan imkoniyatlar
          </h2>
          {this.renderBoxes()}
        </Container>
      </section>
    );
  }
}

export default Potential;
