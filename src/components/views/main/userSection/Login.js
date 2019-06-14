import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../../../store/actions/authActions'
import LoginForm from '../../../forms/LoginForm';


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        loggedIn: state.auth.loggedIn
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
            user: {},
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
        if(localStorage.getItem('ACCESS_TOKEN') !== null) {

            console.log("FLYTTTTA TILL PROFIL")
            
            return( <Redirect to="/profile" /> )
        }

        return(
            <div className="container">
                <h1>Login</h1>
                <LoginForm cred={this.state.cred} onSubmit={this.onSubmit} onChange={this.onChange} />
            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Login);