import React, { Component } from "react";
import classes from "./Home.css";
import Bg from "./images/Rectangle15.jpg";
import Header from "./Sections/Header";
import Menu from "../../components/Navigation/Menu/Menu";
import Main from "./Sections/Main/Main";
import Potential from "./Sections/Potential/Potential";
import BuyCard from "./Sections/BuyCards/BuyCard";
import Logo from "./images/Logo-white-1.svg";
import Modal from "../../components/Modal/Modal";


class Home extends Component {
  state = {
    modal: false,
    menu: false
  };

  toggleModalHandler = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal onToggle={this.toggleModalHandler} isOpen={this.state.modal} />
        <div
          className={classes.HomeBg}
          style={{ backgroundImage: `url(${Bg})` }}
        >
          <Menu
            logo={Logo}
            pTop="35px"
            color="#fff"
            onToggle={this.toggleModalHandler}
            onToggleMenu={this.toggleMenuHandler}
            isClose={this.state.menu}
          />
          <Header />
        </div>
        <Main />
        <Potential />
        <BuyCard />
      </React.Fragment>
    );
  }
}

export default Home;
