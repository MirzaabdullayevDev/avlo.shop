import React, { Component } from "react";
import classes from "./About.css";
import Menu from "../../components/Navigation/Menu/Menu";
import Logo from "./images/Logo-white-1.svg";
import BgImg from "./images/Rectangle15.jpg";
import AboutHeader from "./Sections/AboutHeader";
import AvloshopInfo from "./Sections/AvloshopInfo/AvloshopInfo";
import PartnersInfo from "./Sections/PartnersInfo/PartnersInfo";
import Modal from "../../components/Modal/Modal";

class About extends Component {
  state = {
    menu: false,
    modal: false,
  };
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  toggleModalHandler = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Modal onToggle={this.toggleModalHandler} isOpen={this.state.modal} />
        <div
          className={classes.About}
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <Menu
            logo={Logo}
            pTop="35px"
            color="#fff"
            onToggle={this.toggleModalHandler}
            onToggleMenu={this.toggleMenuHandler}
            isClose={this.state.menu}
          />
          <AboutHeader />
        </div>
        <AvloshopInfo />
        <PartnersInfo />
      </React.Fragment>
    );
  }
}

export default About;
