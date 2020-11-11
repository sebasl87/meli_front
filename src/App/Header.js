import React, { Component } from "react";
import { MeliHeader } from "../Components";

import { withRouter } from "react-router-dom";

class Header extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state !== null) {
      this.props.history.push({
        pathname: "/items",
        search: `?q=${this.state.item}`,
      });
    }
  };

  render() {
    return (
      <header>
        <MeliHeader
          placeholderM="Nunca dejes de buscar"
          onChange={this.handleChange}
          onClick={this.handleSubmit}
        />
      </header>
    );
  }
}

export default withRouter(Header);
