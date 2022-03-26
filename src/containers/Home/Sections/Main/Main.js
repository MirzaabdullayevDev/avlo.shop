import React, { Component } from "react";
import classes from "./Main.css";
import { Container, Row, Col } from "react-bootstrap";
import registerImg from "./images/register.jpg";
import lineImg from "./images/Group-63.jpg";
import { NavLink } from "react-router-dom";
import statistic from "./images/statistic.jpg";

const rows = [
  {
    img: registerImg,
    h3: "Ro’yxatdan o’ting",
    text: `Sotishni boshlash uchun Avlo.shop da ro'yxatdan o'ting.
        Shundan so'ng siz quyidagilarni amalga oshirishingiz mumkin:`,
    link1: "Maxsulotlarni saytga joylash",
    link2: "Daromad qilishni boshlash",
    number: 1,
  },
  {
    img: statistic,
    h3: "Hamma joyda sotish",
    text: `Rivojlanishingiz kerak bo'lgan tushunchalarni oling -
    buyurtma, etkazib berish va to'lovlarni qayerga bo'lmasin
    boshqarish uchun bitta boshqaruv panelidan foydalaning.`,
    link1: "",
    link2: "",
    number: 2,
  },
];

class Main extends Component {
  renderRows() {
    return rows.map((row, index) => {
      let main;
      let info;
      let img;
      let text;
      let order = 0;
      let div = (
        <ul className={classes.InfoLinks}>
          <li className={classes.InfoList}>
            <NavLink className={classes.InfoText} to="/">
              {row.link1}
            </NavLink>
          </li>
          <li className={classes.InfoList}>
            <NavLink className={classes.InfoText} to="/">
              {row.link2}
            </NavLink>
          </li>
        </ul>
      );

      if (index % 2 === 0) {
        main = classes.MainTop;
        info = classes.MnLeftInfo;
        img = classes.MnLeftImg;
        text = classes.InfoBox;
      } else {
        main = classes.MainBottom;
        order = -1;
        info = classes.MnBottomInfo;
        img = classes.MnBottomImg;
        text = classes.BottomInfoText;
        div = "";
      }

      return (
        <Row className={main} key={index}>
          <Col lg="6" xs="12" md="10">
            <div className={img}>
              <img src={row.img} alt="jpg" />
            </div>
          </Col>
          <Col lg="6" xs="12" md="10" style={{ order: `${order}` }}>
            <div className={info}>
              <div className={text}>
                <h3 className={classes.InfoTitle}>{row.h3}</h3>
                <p className={classes.InfoText}>{row.text}</p>
                {div}
              </div>
              <div className={classes.InfoLine} style={{ order: order }}>
                <span className={classes.MainNum}>{row.number}</span>
                <img src={lineImg} alt="jpg" />
              </div>
            </div>
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <div className={classes.Main}>
        <h2 className={classes.MainTitle}>Saytimizdan foydalanish</h2>
        <Container>{this.renderRows()}</Container>
      </div>
    );
  }
}

export default Main;
