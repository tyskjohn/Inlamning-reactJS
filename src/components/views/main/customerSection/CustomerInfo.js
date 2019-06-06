import React, { Component } from 'react';
import http from 'axios';

class CustomerInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '5ccc2afb2726f63168f0d3c7',
            currentUser: {}
        }
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="container">
                <h4 className="mt-5 mb-5">Customerinfo</h4>
            </div>
        )
    }

    componentDidMount() {
        http.get(`http://localhost:3001/api/users/5ccc2afb2726f63168f0d3c7`)
            .then(user => this.setState({ currentUser: user.data }))
            .catch(error => console.log(error))
    }

}

export default CustomerInfo;