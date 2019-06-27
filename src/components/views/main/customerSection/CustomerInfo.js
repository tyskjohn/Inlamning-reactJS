import React, { Component } from 'react';
import http from 'axios';

class CustomerInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customers: {},
            createdby: localStorage.getItem('USER_EMAIL'),
            customeremail: '',
            title: '',
            description: '',
            status: 'notstarted'
        }
    }

    componentDidMount() {
        //this.inputCustomerEmail.value= "hej";

        let getToken = localStorage.getItem('ACCESS_TOKEN');

        http.get(`http://localhost:3001/api/customers/all`, { headers: { 'Authorization': `Bearer ${getToken}` } })
            .then(res => this.setState({ customers: res.data }))
            .catch(error => console.log(error))
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        http
            .post('http://localhost:3001/api/issues/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerissues'))
            .catch(error => {
                console.log(error)
                window.alert("Invalid form")
            })
    }

    selectCustomers(e) {
        this.setState({ customers: this.state.people.concat([e.target.value]) })
    }

    getCurrentCustomer = (e ) => {
        // var array = this.state.customers;
        // var index = array.indexOf(e.target.value)

        // console.log(array)
        // if ( index !== -1 ) {
        //     array().splice(index, 1);
        //     // this.setState({ customers: array });
        //     console.log(index)
            // this.setState({customers: this.state.customers.filter(function(customer) { 
            //     console.log(customer)
            //     return customer !== e.target.value 
            // })});
        // }
    }

    render() {
        const { createdby, customeremail, title, description, status, customers } = this.state;

        return (
            <div className="container">
                <h4 className="mt-5 mb-5">Customer issues</h4>



                <ul className="list-group">
                    {
                        customers.length ? customers.map((customer) => <li key={customer._id} className="list-group-item mb-4" >

                            {/* <button className="btn btn-primary" type="button" onClick={this.getCurrentCustomer}>click</button> */}

                            <form onSubmit={this.handleSubmit}>

                                <span>Create new issue for customer:  <strong> {customer.email} </strong> </span>

                                <div className="form-row  mt-3">

                                    <div className="form-group col-md-6">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" value={title} onChange={this.handleChange} className="form-control" id="title" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="status">Status</label>
                                        <select className="form-control" id="status" value={status} onChange={this.handleChange}>
                                            <option value="notstarted" className="notstarted" >Not started</option>
                                            <option value="active" className="active" >Active</option>
                                            <option value="finished" className="finished" >Finished</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="description">Short descrition</label>
                                        <input type="text" value={description} onChange={this.handleChange} className="form-control" id="description" />
                                    </div>
                                </div>

                                <div className="form-row ">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="customeremail">Insert customer email</label>
                                        <input type="email" value={customeremail} onChange={this.handleChange} className="form-control" id="customeremail" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="createdby">Created by</label>
                                        <input type="email" value={createdby} readOnly className="form-control" id="createdby" />
                                    </div>
                                </div>


                                <button type="submit" value="Create" className="mt-3 btn btn-primary mb-4">Create issue</button>

                            </form>

                        </li>)
                            : //betyder else
                            null
                    }
                </ul>

            </div>
        )
    }

}

export default CustomerInfo;