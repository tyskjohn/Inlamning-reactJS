import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './userSection/Login';
import Profile from './userSection/Profile';
import Register from './userSection/Register';
import Home from './Home';
import CustomerInfo from '../main/customerSection/CustomerInfo';
import RegCustomer from '../main/customerSection/RegCustomer';
import CustomerIssues from './customerSection/CustomerIssues';

const Content = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/register' component={Register} />
                <Route path='/customerinfo' component={CustomerInfo} />
                <Route path='/regcustomer' component={RegCustomer} />
                <Route path='/customerissues' component={CustomerIssues} />
            </Switch>
        </main>
    )
}

export default Content;