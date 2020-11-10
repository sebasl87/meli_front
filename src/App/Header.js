import React, { Component } from "react";
import { MeliHeader } from "../Components";
import { connect } from "react-redux";

import { fetchItemsRequested } from "../actions/items";

class Header extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.searchIn(this.state);
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
const mapStateToProps = (state) => {
  return {
    doc : state.doc
  }
  // console.log(state);
  // return {
  //     auth: state.firebase.auth,
  //     forget: state.user.passForget
  //     // user: state.user.user
  // }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchIn: (query) => dispatch(fetchItemsRequested(query)),
    // forgetOn: () => dispatch(forgetOn()),
    // forgetOff: () => dispatch(forgetOff()),
    // rePass: (cred) => dispatch(repassOn(cred)),
    // onUserLogin: (user) => {
    //     dispatch(addUser(user))
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
