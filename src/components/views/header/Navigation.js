import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <NavLink to='/' className="navbar-brand">Inlämning ReactJS</NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" to="/regcustomer">Add Customer</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" to="/customerinfo">Customerinfo</NavLink>
                        </li>
                    </ul>

                </div >
            </div >
        </nav>
    )
}

export default Navigation;