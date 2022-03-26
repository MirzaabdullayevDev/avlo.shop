import React, { Component } from "react";
import classes from "./PriceScope.css";
import { Container, Row, Col } from "react-bootstrap";
import ButtonTransparent from "../../../../components/UI/ButtonTransparent/ButtonTransparent";

const times = () => {
  const cls = ["fas fa-times", classes.Warning];
  return <i className={cls.join(" ")}></i>;
};

const check = () => {
  const cls = ["fas fa-check", classes.Success];
  return <i className={cls.join(" ")}></i>;
};

const lists = [
  { left: "Analitika", center: "+", right: "03" },
  { left: "Storages", center: "5GB", right: "10GB" },
  { left: "Email Accounts", center: "10", right: "25" },
  { left: "Premium Themes", center: times(), right: check() },
  { left: "Premium Themes", center: times(), right: check() },
  { left: "Premium Themes", center: times(), right: check() },
  { left: "Advanced Forms", center: times(), right: check() },
  { left: "Premium Icons", center: times(), right: check() },
  { left: "Customer Support", center: "Limited", right: check() },
  { left: "Roles & permissions", center: "+", right: "+" },
];

const btns = [{ label: "Tanlash" }, { label: "Tanlash" }];

class PriceScope extends Component {
  renderLists() {
    return lists.map((list, index) => {
      return (
        <div className={classes.ListItem} key={index}>
          <div className={classes.ListItemLeft}>{list.left}</div>
          <div className={classes.ListItemCenter}>{list.center}</div>
          <div className={classes.ListItemRight}>{list.right}</div>
        </div>
      );
    });
  }

  renderBtns() {
    return btns.map((btn, index) => {
      return (
        <div className={classes.Btn} key={index}>
          <ButtonTransparent color="#ff4a2e" radius="30px" weight="500">
            {btn.label}
          </ButtonTransparent>
        </div>
      );
    });
  }

  render() {
    return (
      <section className={classes.PriceScope}>
        <Container>
          <h2 className={classes.ScopeTitle}>Narxlar va Imkoniyatlar</h2>
          <Row style={{ justifyContent: "center" }}>
            <Col xs="12" lg="9" xl="8">
              <div className={classes.ListTitles}>
                <div className={classes.LsTitleLeft}></div>
                <div className={classes.LsTitleCenter}>Bepul</div>
                <div className={classes.LsTitleRight}>Pro</div>
              </div>
              <div className={classes.Lists}>
                {this.renderLists()}
                <div className={classes.ListBtns}>{this.renderBtns()}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default PriceScope;
