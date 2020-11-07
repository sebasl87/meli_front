import React, { Component } from 'react'
import {fetchItemsRequested} from '../actions/items'
// import { Redirect } from 'react-router-dom'
// import 'firebase/auth';
// import { CardLogin } from '../components';
import { connect } from 'react-redux';

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

    }
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
        // const { auth, forget } = this.props
        // if(auth.uid) return <Redirect to='/extranet' />

        return (
            <>
                <div>
                    HOLIS
                    {/* {console.log(props.user)} */}
                </div>
                <button className="btn btn-primary"
                    onClick={this.handleSubmit}

                >
                    COMPRA
                </button>
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

        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: () => dispatch(fetchItemsRequested()),
        // forgetOn: () => dispatch(forgetOn()),
        // forgetOff: () => dispatch(forgetOff()),
        // rePass: (cred) => dispatch(repassOn(cred)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start)