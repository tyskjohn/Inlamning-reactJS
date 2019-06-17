import React, { Component } from 'react';
import http from 'axios';
import { NavLink } from 'react-router-dom';
import UniqueId from 'react-html-id';

class CustomerInfo extends Component {

    constructor(props) {
        super(props)

        UniqueId.enableUniqueIds(this);

        this.state = {
            customers: {}
        }
        console.log(this.state.customers)
    }

    render() {
        const { customers } = this.state;

        return (
            <div className="container">
                <h4 className="mt-5 mb-5">Customerinfo</h4>


                <ul className="list-group">
                {
                    customers.length ? customers.map( (customer) => <li key={customer._id} className="list-group-item" > <strong>Customer:</strong> {customer.email} # {customer.id} <NavLink to="/customerissues" customer={this.state.customers} type="button" className="add-issue btn btn-primary btn-sm">add issue</NavLink> </li> )
                    : //betyder else
                        null
                }       
                </ul>         

            </div>
        )
    }

    componentDidMount() {
        let getToken = localStorage.getItem('ACCESS_TOKEN');
        
        http.get(`http://localhost:3001/api/customers/all`, { headers: { 'Authorization': `Bearer ${getToken}` } } )
            .then(res => this.setState({ customers: res.data }))
            .catch(error => console.log(error))
    }

}

export default CustomerInfo;