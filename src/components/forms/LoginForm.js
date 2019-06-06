import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { login } from '../../store/actions/authActions';
// import { Redirect } from 'react-router-dom';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

            

        this.props.login(this.state)
    }

    render() {
        const { email, password } = this.state;
        const { authError, token } = this.props;

        // if(token) return <Redirect to="/" />

        return (
            <form className="mt-4" onSubmit={ this.handleSubmit }>

                <div className="row form-group col-6">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={ email } onChange={this.handleChange} />
                </div>
                <div className="row form-group col-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={ password } onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-lg btn-secondary" disabled={!this.validateForm()}>Login</button>

            </form>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        token: state.auth.token
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (credentials) => dispatch(login(credentials))
//     }
// }

// connect(mapStateToProps,mapDispatchToProps)

export default  (LoginForm);