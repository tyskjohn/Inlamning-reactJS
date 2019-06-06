import React, { Component } from 'react';
import http from 'axios';
import { Switch, Route } from 'react-router-dom';
import CustomerInfo from '../customerSection/CustomerInfo';
import RegCustomer from '../customerSection/RegCustomer';

class Profile extends Component {

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
                <h2 className="mt-5 mb-5">Welcome {currentUser.firstname} {currentUser.lastname}</h2>

                

                <div>
                    <Switch>
                        <Route path='/profile/customerinfo' component={CustomerInfo} />
                        <Route path='/profile/regcustomer' component={RegCustomer} />
                    </Switch>
                </div>
            </div>
        )
    }

    componentDidMount() {
        http.get(`http://localhost:3001/api/users/5ccc2afb2726f63168f0d3c7`)
            .then(user => this.setState({ currentUser: user.data }))
            .catch(error => console.log(error))
    }

}

export default Profile;