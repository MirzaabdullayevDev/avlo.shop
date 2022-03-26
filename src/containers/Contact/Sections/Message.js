import React, { Component } from "react";
import classes from "./Message.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../../../components/UI/Button/Button";
import MessageCard from "./MessageCard/MessageCard";

class Message extends Component {
  render() {
    return (
      <section className={classes.Message}>
        <Container>
          <Row style={{ justifyContent: "flex-end" }}>
            <Col md="12" lg="7" xl="8" xs="12">
              <form action="">
                <Row>
                  <Col md="6" xs="12">
                    <span className={classes.ContactUs}>
                      Biz bilan bog’lanish
                    </span>
                    <h2 className={classes.SendMessage}>Xabar yuborish</h2>
                  </Col>
                </Row>
                <Row>
                  <Col md="6" xs="12">
                    <input
                      type="text"
                      placeholder="Ism va Familiya"
                      required
                      className={classes.NameInp}
                    />
                  </Col>
                  <Col md="6" xs="12">
                    <input
                      type="number"
                      placeholder="Phone number"
                      required
                      className={classes.NameInp}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <textarea
                      placeholder="Xabaringiz"
                      type="text"
                      required
                      className={classes.ConCommentInp}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-md-end">
                  <Col xs="12" className={classes.BoxBtn}>
                    <Button padding="20px 50px">Yuborish</Button>
                  </Col>
                </Row>
              </form>
            </Col>
            <MessageCard />
          </Row>
        </Container>
      </section>
    );
  }
}

export default Message;
