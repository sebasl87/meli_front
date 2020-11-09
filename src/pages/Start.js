import React, { Component } from "react";
import { fetchItemsRequested } from "../actions/items";
// import { Redirect } from 'react-router-dom'
// import 'firebase/auth';
// import { CardLogin } from '../components';
import { connect } from "react-redux";
import {
  MeliBreadcrumb,
  MeliHeader,
  MeliImg,
  MeliListCard,
} from "../Components";

// import { logIn, forgetOn, forgetOff, repassOn } from '../store/actions/auth'
class Start extends Component {
  // state = {
  //     email: '',
  //     password: ''
  // }

  // handleChange = (e) => {
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     })

  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  };
  // handleForgetOn = (e) => {
  //     e.preventDefault();
  //     this.props.forgetOn()

  // }
  // handleForgetOff = (e) => {
  //     e.preventDefault();
  //     this.props.forgetOff()

  // }
  // handleRePass = async (e) => {
  //     e.preventDefault()
  //     this.props.rePass(this.state)

  // }
  render() {
    const arrayT = ["paso 1", "otro paso", "lo ultimo fue"];
    // const { auth, forget } = this.props
    // if(auth.uid) return <Redirect to='/extranet' />
    // const item = {
    //   id: "MLA870176477",
    //   title:
    //     "Pileta Estructural Rectangular Pelopincho 1010 Con Capacidad De 500 Litros De 1.55m De Largo X 1.07m De Ancho",
    //   price: {
    //     currency: "ARS",
    //     amount: 3399.9,
    //   },
    //   picture: "http://http2.mlstatic.com/D_678155-MLA40184463929_122019-I.jpg",
    //   condition: "new",
    //   free_shipping: true,
    //   state: "Capital Federal",
    // };
    const items = [
      {
        id: "MLA870176477",
        title:
          "Pileta Estructural Rectangular Pelopincho 1010 Con Capacidad De 500 Litros De 1.55m De Largo X 1.07m De Ancho",
        price: {
          currency: "ARS",
          amount: 3399.9,
        },
        picture:
          "http://http2.mlstatic.com/D_678155-MLA40184463929_122019-I.jpg",
        condition: "new",
        free_shipping: true,
        state: "Capital Federal",
      },
      {
        id: "MLA870176487",
        title: "Pileta Estructural Rectangular ",
        price: {
          currency: "ARS",
          amount: 342.9,
        },
        picture:
          "http://http2.mlstatic.com/D_678155-MLA40184463929_122019-I.jpg",
        condition: "new",
        free_shipping: false,
        state: "Mendoza",
      },
    ];
    return (
      <>

        <br/>
        <br/>
        <MeliHeader placeholderM="Nunca dejes de buscar" />
        <div>
          HOLIS
          {/* {console.log(props.user)} */}
        </div>
        <MeliImg srcI="https://http2.mlstatic.com/D_NQ_NP_714978-MLA28464870121_102018-O.webp" max="true"/>
        <br />
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          COMPRA
        </button>

        <br />
        <MeliBreadcrumb data={arrayT} />
        <br />

        {/* <MeliCard data={item} /> */}
        <br />

        <MeliListCard totalData={items} />
        {/* <CardLogin
                    onChange={this.handleChange}
                    onClick={this.handleSubmit}
                    onForget={this.handleForgetOn}
                    offForget={this.handleForgetOff}
                    onRePass={this.handleRePass}
                    forget={forget}
                    user={this.state}
                /> */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => dispatch(fetchItemsRequested()),
    // forgetOn: () => dispatch(forgetOn()),
    // forgetOff: () => dispatch(forgetOff()),
    // rePass: (cred) => dispatch(repassOn(cred)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
