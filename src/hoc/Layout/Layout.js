import React, { Component } from "react";
import classes from "./Layout.css";
import Footer from "../../components/Footer/Footer";
import Business from "../../components/Business/Business";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <main>{this.props.children}</main>
        <Business />
        <Footer />
      </div>
    );
  }
}

export default Layout;
