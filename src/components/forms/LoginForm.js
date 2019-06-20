import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        return (
            <form className="mt-4" onSubmit={ this.props.onSubmit }>

                <div className="row form-group col-6">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={ this.props.email } onChange={this.props.onChange} />
                </div>
                <div className="row form-group col-6">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" value={ this.props.password } onChange={this.props.onChange} />
                </div>

                <button type="submit" className="btn btn-lg btn-primary">Login</button>

            </form>
        )
    }
}
export default LoginForm;