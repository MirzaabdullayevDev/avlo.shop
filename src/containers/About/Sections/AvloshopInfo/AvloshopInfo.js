import React, { Component } from "react";
import classes from "./AvloshopInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import girl from "./images/selling-online-2.png";

const informs = [
  {
    title: "Avlo.Shop tarixi",
    text: `SmartDeals jamoasi 2021 yilda O'zbekistondagi birinchi elektron tijorat platformasi Avlo.Shop loyihasini asos solgan. Hozirgi kunda kichik va o'rta biznes egalarining aksariyati o'zlarining veb-saytlariga ega va ular Internetda mahsulot sotish va onlayn savdo orqali katta auditoriyani jalb qilish uchun foydalanishni xohlashadi. Biz ularga bu borada yordam berishga qaror qildik va 2021 yilda Avlo.Shop paydo bo'ldi - foydalanish uchun qulay bo'lgan onlayn-do'kon ishlab chiqaruvchisi. Dasturlash qobiliyatiga ega bo'lmagan har qanday kishi osongina onlayn-do'kon yaratib, uni o'z veb-saytida, blogida yoki ijtimoiy tarmoqdagi sahifasida joylashtirishi mumkin.`,
  },
  {
    title: "Avlo.Shop maqsadi",
    text: `Biz bir maqsadli jamoamiz - kichik biznesingizni muvaffaqiyatli qilish.
    Biz dunyodagi elektron tijorat texnologiyalarining kuchini o’rganib, birlashtiramiz va ularni sodda va hamma uchun qulay qilib yaratamiz.
    Bizni ko’plar qo'llab-quvvatlashadi va bizga ishonch bildirishadi. 
    Biz doimo o'rganamiz va kelgan joyimizda to'xtamaymiz.
    Avlo.Shop kichik biznes uchun yaratilgan bo'lib, tezda onlayn-do'konni ishga tushirishga va sotishni boshlashga yordam beradi. Mavjud saytingizdan voz kechishga hojat yo'q - Avlo.Shop Internetdagi barcha saytlaringizda ishlaydi. Xaridorlar sizni saytda har qanday brauzerdan topadilar. Bugun yangi onlayn do'koningizni oching!`,
  },
];

class AvloshopInfo extends Component {
  renderInfo() {
    return informs.map((info, index) => {
      let order = 0;
      if (index % 2 !== 0) {
        order = 1;
      }
      return (
        <Row className={classes.AvloshopRow} key={index}>
          <Col xs="12" md="9" lg="6" xxl="5" style={{ order: order }}>
            <div className={classes.AvloinfoLeft}>
              <img src={girl} alt="jpg" />
            </div>
          </Col>
          <Col xs="12" md="9" lg="6" xxl="5">
            <div className={classes.AvloinfoRight}>
              <h2 className={classes.AvloRightTitle}>{info.title}</h2>
              <p className={classes.AvloRightText}>{info.text}</p>
            </div>
          </Col>
        </Row>
      );
    });
  }
  render() {
    return (
      <section className={classes.AvloshopInfo}>
        <Container>{this.renderInfo()}</Container>
      </section>
    );
  }
}

export default AvloshopInfo;
