import React from "react";
import { Col, Card } from "react-bootstrap";
import classes from "./Card.css";
import ButtonTransparent from "../UI/ButtonTransparent/ButtonTransparent";

const cards = [
  {
    h3: "Bepul",
    price: "0",
    text: `Sizning biznesingizni bepul boshlash uchun oson onlayn
      do'kon`,
  },
  {
    h3: "Pro",
    price: "199 000",
    text: `Onlayn do'koningizni rivojlantirish va boshqarish uchun
      professional xususiyatlar`,
  },
];

const CardPrice = (props) => {
  return cards.map((card, index) => {
    let cls = "";

    index % 2 === 0 ? (cls = classes.CLeftCol) : (cls = classes.CRightCol);

    return (
      <Col xs="12" sm="9" md="6" lg="5" xl="4" className={cls} key={index}>
        <Card
          className={classes.Card}
          key={index}
          style={{ background: props.BgColor }}
        >
          <div className={classes.CardTop}>
            <h3 className={classes.CardFree}>{card.h3}</h3>
            <span className={classes.MonthPlan}>Oylik reja</span>
            <p className={classes.MonthPrice}>
              <span className={classes.MPrice2}>{card.price} so’m</span>/ Oyiga
            </p>
          </div>
          <hr />
          <div className={classes.CardBottom}>
            <p className={classes.CBottomText}>{card.text}</p>
          </div>
          <div className={classes.BtnPlace}>
            <ButtonTransparent color="#262729" radius="50px" weight="400">Tanlash</ButtonTransparent>
          </div>
        </Card>
      </Col>
    );
  });
};

export default CardPrice;
