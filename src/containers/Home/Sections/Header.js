import React from "react";
import classes from "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
import Girl from "./images/selling-online-1.png";
import Rec from "./images/Rectangle.png";

const Header = (props) => {
  const row = [
    classes.ContentRow,
    "justify-content-md-start",
    "justify-content-xxl-evenly",
  ];

  const display = ["d-none", "d-lg-block", "d-xxl-none"];
  return (
    <section className={classes.Header}>
      <Container>
        <Row
          className={row.join(" ")}
          style={{ backgroundImage: `url(${Rec})` }}
        >
          <Col xs={10} sm={9} md={8} lg={6} className={classes.ContentBlock}>
            <h1 className={classes.TitleContent}>
              Onlayn sotishni boshlash vaqti keldi
            </h1>
            <p className={classes.TextContent}>
              Biz sizga o'z biznesingizni ochishda va undan pul ishlashga yordam
              beramiz. O'zingizning onlayn do'koningizni yarating. Bu oson va
              bepul
            </p>
            <button className={classes.BtnContent}>Do'kon yaratish</button>
          </Col>
          <Col xs={1} className={display.join(" ")}></Col>
          <Col xs={12} md={10} lg={5} className={classes.ContentImg}>
            <div className={classes.ContentSlider}>
              <img src={Girl} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
