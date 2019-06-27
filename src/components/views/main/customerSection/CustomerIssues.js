import React, { Component } from 'react';
import http from 'axios';

class CustomerIssues extends Component {

    constructor(props) {
        super(props)

        this.state = {
            issues: {},
            customer: {},
            currentcustemail: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        let getToken = localStorage.getItem('ACCESS_TOKEN');
        let getCurrentCustomerEmail = this.state.currentcustemail;

        http
            .post(`http://localhost:3001/api/issues/${getCurrentCustomerEmail}`, { headers: { 'Authorization': `Bearer ${getToken}` } })
            .then(res => this.setState({ issues: res.data }))
            .catch(error => console.log(error))

        http
            .post(`http://localhost:3001/api/customers/${getCurrentCustomerEmail}`, { headers: { 'Authorization': `Bearer ${getToken}` } })
            .then(res => this.setState({ customer: res.data }))
            .catch(error => console.log(error))

        this.setState(this.state.customer);

    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        const { issues, customer, currentcustemail } = this.state;

        return (
            <div className="container">

                <form className="mt-4" onSubmit={this.handleSubmit} >

                <label htmlFor="currentcustemail">Insert customer email address</label>

                    <div className="form-row">

                        <div className="form-group col-md-6" >
                            <input className="form-control" type="text" onChange={this.handleChange} id="currentcustemail" value={currentcustemail} placeholder="Customer email" />
                        </div>

                        <div className="form-group col-md-3">
                            <input className="btn btn-success" type="submit" value="Load Issues" />
                        </div>

                    </div>
                </form>


                <h5 className="mt-3 mb-3">Customer Info</h5>
                <ul className="list-group mt-3">
                    <li className="list-group-item"><strong>Firstname:</strong> {customer.firstname}</li>
                    <li className="list-group-item"><strong>Lastname:</strong> {customer.lastname}</li>
                    <li className="list-group-item"><strong>Company:</strong> {customer.companyname}</li>
                    <li className="list-group-item"><strong>Email:</strong> {customer.email}</li>
                    <li className="list-group-item"><strong>Phone:</strong> {customer.phonenumber}</li>
                    <li className="list-group-item"><strong>Addressline:</strong> {customer.addressline}</li>
                    <li className="list-group-item"><strong>Zipcode:</strong> {customer.zipcode}</li>
                    <li className="list-group-item"><strong>City:</strong> {customer.city}</li>
                    <li className="list-group-item"><strong>Country:</strong> {customer.country}</li>
                </ul>

                <h5 className="mt-4 mb-4">All issues for {customer.email}</h5>
                <ul className="list-group mb-5">
                    {
                        issues.length ? issues.map((issue) => <li key={issue._id} className="list-group-item" > <strong>Title: </strong>{issue.title} <strong>Description: </strong> {issue.description} <strong>Status: </strong> {issue.status} <strong>Created by: </strong> {issue.createdby} </li>)
                            :
                            null
                    }
                </ul>

            </div>
        )
    }
}

export default CustomerIssues;