import React from "react";
import classes from "./Menu.css";
import { NavLink } from "react-router-dom";
import { Navbar, Row, Col, Container } from "react-bootstrap";

const links = [
  { to: "/", label: "Bosh sahifa", exact: true },
  { to: "/opportunity", label: "Imkoniyatlar", exact: false },
  { to: "/about", label: "Biz haqimizda", exact: false },
  { to: "/contact", label: "Aloqa", exact: false },
];
const dn = ["d-xl-none"];
const btn = ["d-none d-lg-block"];

const renderLinks = (color) => {
  const cls = ["d-xl-block", classes.MenuLink];
  return links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink
          className={cls.join(" ")}
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          style={{ color: color }}
        >
          {link.label}
        </NavLink>
      </li>
    );
  });
};

const Menu = (props) => {
  console.log(props);
  const clsMenu = [
    classes.MenuOpen,
  ]

  const fixed = []

  if (props.isClose) {
    clsMenu.push(classes.open)
    fixed.push(classes.FixedMenu)
  } else {
    clsMenu.push(classes.close)
    fixed.push(classes.close)
  }

  return (
    <React.Fragment>
      <div className={clsMenu.join(' ')} onClick={props.onToggleMenu}></div>
      <Container>
        <Navbar
          className={classes.Navbar}
          style={{ paddingTop: props.pTop, paddingBottom: props.pBottom }}
        >
          <Row className={classes.RowFlex}>
            <Col xs={2} className={dn.join(" ")}>
              <NavLink to={"#!"} className={classes.Bars} onClick={props.onToggleMenu} style={{ color: props.color }}>
                <i className="fas fa-bars" ></i>
              </NavLink>
            </Col>
            <Col xs={7} sm={6} xl={8}>
              <ul className={classes.MenuLeft}>
                <li className={classes.NavbarLogo}>
                  <NavLink to={"/"}>
                    <img src={props.logo} alt="" />
                  </NavLink>
                </li>
                <div className="d-lg-flex d-none justify-content-between" style={{ width: '100%', marginLeft: '69px' }}>
                  {renderLinks(props.color)}
                </div>
                <div className={fixed.join(' ')} style={{ display: 'none' }}>
                  {renderLinks(props.color)}
                </div>
              </ul>
            </Col>
            <Col xs={2} sm="auto">
              <ul className={classes.MenuRight}>
                <li>
                  <NavLink
                    className={classes.RightLink}
                    to="#!"
                    onClick={props.onToggle}
                  >
                    Kirish
                  </NavLink>
                </li>
                <li className={btn.join(" ")}>
                  <button className={classes.RightBtn}>Do’kon yaratish</button>
                </li>
              </ul>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </React.Fragment>
  );
};

export default Menu;
