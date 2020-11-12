import React, { Component } from "react";
import "./meli-logo.scss";
import logo from "../../../Assets/Logo_ML@2x.png";
import { withRouter } from "react-router-dom";

class MeliLogo extends Component {
  render() {
    const { history } = this.props;
    return (
      <img
        src={logo}
        alt="Logo ML"
        className="logo"
        onClick={() => {
          history.push("/");
        }}
      />
    );
  }
}

export default withRouter(MeliLogo);
