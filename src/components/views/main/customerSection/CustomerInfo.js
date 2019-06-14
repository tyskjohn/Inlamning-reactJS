import React, { Component } from 'react';
import http from 'axios';

class CustomerInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customers: {}
        }
    }

    render() {
        const { customers, index } = this.state;

        return (
            <div>
                <h4 className="mt-5 mb-5">Customerinfo</h4>

                {
                    customers.length ? customers.map( (customer) => <div key={index}> {customer.firstname} {customer.lastname}</div> )
                    : //betyder else
                        null
                }                

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