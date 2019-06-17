import React from 'react';
import CustomerRegisterForm from '../../../forms/CustomerRegisterForm';
import { Redirect } from 'react-router-dom';

const RegCustomer = (props) => {

    if(localStorage.getItem('ACCESS_TOKEN') === null) {
        return( <Redirect to="/login" /> )
    }

    return (
        <div className="container">

            <CustomerRegisterForm></CustomerRegisterForm>

        </div>
    )
}

export default RegCustomer;