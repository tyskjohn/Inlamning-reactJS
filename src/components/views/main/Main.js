import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './userSection/Login';
import Profile from './userSection/Profile';
import Register from './userSection/Register';
import Home from './Home';

const Content = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/register' component={Register} />
            </Switch>
        </main>
    )
}

export default Content;