import React, { Component } from "react";
import classes from "./Opportunity.css";
import Offers from "./Sections/Offers";
import Menu from "../../components/Navigation/Menu/Menu";
import PriceScope from "./Sections/PriceScope/PriceScope";
import Logo from "./images/Asset4.svg";
import Modal from "../../components/Modal/Modal";

class Opportunity extends Component {
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
      <div className={classes.Opportunity}>
        <Modal onToggle={this.toggleModalHandler} isOpen={this.state.modal} />
        <Menu logo={Logo} pTop="26px" color="#262729" pBottom="26px"
          onToggleMenu={this.toggleMenuHandler}
          onToggle={this.toggleModalHandler}
          isClose={this.state.menu} />
        <Offers />
        <PriceScope />
      </div>
    );
  }
}

export default Opportunity;
