import React, { Component } from "react";
import { MeliHeader } from "../Components";

class Header extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // this.props.logIn(this.state);
    console.log(this.state);
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

export default Header;
