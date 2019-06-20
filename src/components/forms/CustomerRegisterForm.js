import React, { Component } from 'react';
import http from 'axios';
import { withRouter } from 'react-router-dom';

class CustomerRegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            companyname: '',
            addressline: '',
            zipcode: '',
            city: '',
            country: '',
            email: '',
            phonenumber: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        http
            .post('http://localhost:3001/api/customers/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerinfo'))
            .catch(error => console.log(error))
    }

    render() {

        const { firstname, lastname, companyname, addressline, zipcode, city, country, email, phonenumber } = this.state;

        return (
            <div>
                <h4 className="mt-4 mb-3">Add a Customer</h4>
                <form onSubmit={this.handleSubmit}>

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
                            <label htmlFor="companyname">Company Name</label>
                            <input type="text" value={companyname} onChange={this.handleChange} className="form-control" id="companyname" />
                        </div>
                    </div>

                    <hr className="mt-4 mb-4" />

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

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email address</label>
                            <input type="email" value={email} onChange={this.handleChange} className="form-control" id="email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="text" value={phonenumber} onChange={this.handleChange} className="form-control" id="phonenumber" />
                        </div>
                    </div>

                    <button type="submit" value="AddCustomer" className="mt-3 btn btn-lg btn-primary mb-5">Add Customer</button>

                </form>

            </div>

        )
    }

}

export default withRouter(CustomerRegisterForm);