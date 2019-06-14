import React, { Component } from 'react';
import http from 'axios';
import {  withRouter } from 'react-router-dom'

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            middlename: '',
            dateofbirth: '',
            addressline: '',
            zipcode: '',
            city: '',
            country: '',
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        http
            .post('http://localhost:3001/api/angularUsers/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/login'))
            .catch(error => console.log(error))
    }

    render() {

        const { firstname, lastname, middlename, dateofbirth, addressline, zipcode, city, country, email, password } = this.state;

        return (
            <div className="mt-5 ">

                <form onSubmit={this.handleSubmit}>

                    <h5 className="mb-3">Personal info</h5>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" value={firstname} onChange={this.handleChange} className="form-control" id="firstname" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" value={lastname} onChange={this.handleChange} className="form-control" id="lastname" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="middlename">Middlename</label>
                            <input type="text" value={middlename} onChange={this.handleChange} className="form-control" id="middlename" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="dateofbirth">Date of birth</label>
                            <input type="date" value={dateofbirth} onChange={this.handleChange} className="form-control" id="dateofbirth" placeholder="yyyy-mm-dd" />
                        </div>
                    </div>

                    <hr className="mt-4 mb-4" />

                    <h5 className="mb-3">Shipping info</h5>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="addressline">Addressline</label>
                            <input type="text" value={addressline} onChange={this.handleChange} className="form-control" id="addressline" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="text" value={zipcode} onChange={this.handleChange} className="form-control" id="zipcode" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City</label>
                            <input type="text" value={city} onChange={this.handleChange} className="form-control" id="city" />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="country">Country</label>
                            <input type="text" value={country} onChange={this.handleChange} className="form-control" id="country" />
                        </div>
                    </div>

                    <hr className="mt-4 mb-4" />

                    <h5 className="mb-3">Login info</h5>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input type="email" value={email} onChange={this.handleChange} className="form-control" id="email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={this.handleChange} className="form-control" id="password" />
                        </div>
                    </div>

                    <button type="submit" value="Register"  className="mt-3 btn btn-lg btn-secondary mb-5">Register</button>

                </form>

            </div>

        )
    }

}

export default  withRouter(RegisterForm);