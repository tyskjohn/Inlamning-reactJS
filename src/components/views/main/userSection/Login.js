import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../../../store/actions/authActions'
import LoginForm from '../../../forms/LoginForm';


const mapStateToProps = (state) => {
    return {
        // userData: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: {},
            cred: {
                email: '',
                password: ''
            }
        }
    }

    onChange = (e) => {
        const credentials = this.state.cred
        credentials[e.target.id] = e.target.value
        return this.setState({ cred: credentials })
        }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state.cred)
    }

    render() {
        if(localStorage.getItem('ACCESS_TOKEN') ) {
            return( <Redirect to="/profile" /> )
        }

        return(
            <div className="container mt-5">
                <h1>Login</h1>
                <LoginForm cred={this.state.cred} onSubmit={this.onSubmit} onChange={this.onChange} />
            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Login);