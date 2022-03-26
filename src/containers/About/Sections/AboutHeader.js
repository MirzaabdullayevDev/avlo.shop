import React from "react";
import classes from "./AboutHeader.css";
import { Container, Row, Col } from "react-bootstrap";
import statistic from "./images/Rectangle.png";
import Button from "../../../components/UI/Button/Button";

const display = ["d-block d-lg-block", classes.NoneBtn];
const btn = [classes.RightBtn, classes.NoneBtn];

const AboutHeader = (props) => {
  return (
    <section className={classes.AboutHeader}>
      <Container>
        <Row style={{ justifyContent: "flex-end" }}>
          <Col
            lg="6"
            xs="10"
            sm="9"
            md="8"
            className={classes.ConteinerBlock}
            style={{ marginRight: "auto" }}
          >
            <h4 className={classes.AboutSpan}>Biz haqimizda</h4>
            <h1 className={classes.AboutTitle}>
              Avlo.Shop - O'zbekistondagi ilk onlayn do’kon yaratish platformasi
            </h1>
            <p className={classes.AboutText}>
              Biznesni boshlash, yuritish va rivojlantirish uchun hammada
              birma-bir savdo maydonchasi.
            </p>
            <li className={display.join(" ")}>
              <Button className={btn.join(" ")} padding="20px 34px">
                Do’kon yaratish
              </Button>
            </li>
          </Col>
          <Col xl="5" lg="6" xs="12" md="9">
            <div className={classes.AboutImg}>
              <img src={statistic} alt="png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHeader;
