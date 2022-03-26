import React, { Component } from "react";
import classes from "./Contact.css";
import Menu from "../../components/Navigation/Menu/Menu";
import Logo from "./images/Asset4.svg";
import Message from "./Sections/Message";
import Modal from "../../components/Modal/Modal";

class Contact extends Component {
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
        <div className={classes.Contact}>
          <Menu logo={Logo} pTop="26px" color="#262729" pBottom="26px"
            onToggleMenu={this.toggleMenuHandler}
            onToggle={this.toggleModalHandler}
            isClose={this.state.menu} />
          <Message />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
