import React, { Component } from "react";
import classes from "./Footer.css";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "./images/Logo-white-1.svg";

const socialLinks = [
  { to: " #!", icon: "fab fa-facebook-f" },
  { to: " #!", icon: "fab fa-twitter" },
  { to: " #!", icon: "fab fa-instagram" },
];

const linksFirstCol = [
  { to: "#!", label: "Havolalar", exact: false },
  { to: "/", label: "Bosh sahifa", exact: true },
  { to: "/", label: "Biz haqimizda", exact: false },
  { to: "/", label: "Imkoniyatlar", exact: false },
];
const linksSecondCol = [
  { to: "/", label: "Hamkorlarimiz do`konlari", exact: false },
  { to: "/", label: "Foydalanish shartlari", exact: false },
  { to: "/", label: "Aloqa", exact: false },
];
const linksThirdCol = [
  { to: "#!", label: "Aloqa", exact: false },
  { to: "/", label: "Toshkent shahar manzil", exact: false },
  { to: "/", label: "+34 62 19 22 705", exact: false },
  { to: "/", label: "info@medcartel.com", exact: false },
];

const texts = [
  { copyright: "Avlo.shop 2021" },
  { copyright: "Devoloped by Eurosoft" },
];

class Footer extends Component {
  renderSocialLinks() {
    return socialLinks.map((link, index) => {
      return (
        <NavLink key={index} className={classes.FooterIcon} to={link.to}>
          <i className={link.icon}></i>
        </NavLink>
      );
    });
  }
  renderLinksFirstCol() {
    return linksFirstCol.map((link, index) => {
      return (
        <li key={index} className={classes.FooterItem}>
          <NavLink
            className={classes.FooterLink}
            to={link.to}
            exact={link.exact}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  renderLinksSecondCol() {
    return linksSecondCol.map((link, index) => {
      return (
        <li key={index} className={classes.FooterItem}>
          <NavLink
            className={classes.FooterLink}
            to={link.to}
            exact={link.exact}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  renderLinksThirdCol() {
    return linksThirdCol.map((link, index) => {
      return (
        <li key={index} className={classes.FooterItem}>
          <NavLink
            className={classes.FooterLink}
            to={link.to}
            exact={link.exact}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  renderEndCopy() {
    return texts.map((text, index) => {
      return (
        <Col xs="10" md={4} lg="3" xxl="2" key={index}>
          <p className={classes.FooterEnd}>{text.copyright}</p>
        </Col>
      );
    });
  }

  render() {
    return (
      <footer>
        <Container>
          <Row style={{ justifyContent: "space-between" }}>
            <Col xs="12" lg="4" xl="3">
              <div className={classes.LogoLink}>
                <NavLink to="/">
                  <img src={Logo} alt="png" />
                </NavLink>
                <div className={classes.SocialList}>
                  {this.renderSocialLinks()}
                </div>
              </div>
            </Col>
            <Col xs="12" lg="8">
              <Row className={classes.FooterInfo}>
                <Col md="3" xs="5">
                  <ul>{this.renderLinksFirstCol()}</ul>
                </Col>
                <Col md="5" xs="7">
                  <ul>
                    <li className={classes.ForSpace}></li>
                    {this.renderLinksSecondCol()}
                  </ul>
                </Col>
                <Col md="4" xs="10">
                  <ul>{this.renderLinksThirdCol()}</ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row>{this.renderEndCopy()}</Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
