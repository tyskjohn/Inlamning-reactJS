import React, { Component } from 'react';
import { connect } from 'react-redux';
import http from 'axios';
import { logout } from '../../../../store/actions/authActions';
import { Route, Switch } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        user: state.profile.user,
        loggedIn: state.profile.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (user, jwt) => dispatch(logout(user, jwt))
    }
}

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: localStorage.getItem('USER_ID'),
            currentUser: {}
        }
    }

    logout = e => {
        this.props.logout(this.state.user._id, localStorage.getItem('ACCESS_TOKEN'))
        this.setState({ isLoggedIn: false })
    }  

    render() {
        const { currentUser } = this.state;
        const { authError, token, statusMessage } = this.props;

        return (
            <div className="container">

                <button type="button" className="btn btn-primary btn-sm px-2 ml-3 mb-5 " onClick={this.logout}>Logga ut</button>

                <h2 className="mt-5 mb-5">Welcome {currentUser.firstname} {currentUser.lastname}</h2>

                <div className=" mt-4">

                    <h5>Overview</h5>

                    <ul className="list-group">
                        <li className="list-group-item"><strong>Firstname:</strong> {currentUser.firstname}</li>
                        <li className="list-group-item"><strong>Middlename:</strong> {currentUser.middlename}</li>
                        <li className="list-group-item"><strong>Lastname:</strong> {currentUser.lastname}</li>
                        <li className="list-group-item"><strong>Birth date:</strong> {currentUser.dateofbirth}</li>
                        <li className="list-group-item"><strong>Addressline:</strong> {currentUser.addressline}</li>
                        <li className="list-group-item"><strong>Zipcode:</strong> {currentUser.zipcode}</li>
                        <li className="list-group-item"><strong>City:</strong> {currentUser.city}</li>
                        <li className="list-group-item"><strong>Country:</strong> {currentUser.country}</li>
                    </ul>
                </div>

                <div className=" mt-5">

                    <h5 >Edit Userinfo</h5>

                    <form className="mb-5 mt-3">
                        <div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstname">Firstname</label>
                                    <input type="text" formcontrolname="firstname" className="form-control" id="firstname" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastname">Lastname</label>
                                    <input type="text" formcontrolname="lastname" className="form-control" id="lastname" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastname">Middlename</label>
                                    <input type="text" formcontrolname="middlename" className="form-control" id="middlename" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="dateofbirth">Date of birth</label>
                                    <input type="text" formcontrolname="dateofbirth" className="form-control" id="dateofbirth" placeholder="yyyymmdd-xxxx" />
                                </div>
                            </div>

                            <hr className="mt-4 mb-4" />
                            <h5 className="mb-3">Shipping info</h5>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="addressline">Addressline</label>
                                    <input type="text" formcontrolname="addressline" className="form-control" id="addressline" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input type="text" formcontrolname="zipcode" className="form-control" id="zipcode" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input type="text" formcontrolname="city" className="form-control" id="city" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" formcontrolname="country" className="form-control" id="country" />
                                </div>
                            </div>

                            <hr className="mt-4 mb-4" />

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" formcontrolname="email" className="form-control" id="email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" formcontrolname="password" className="form-control" id="password" />
                                </div>
                            </div>

                            <button type="submit" value="Update" className="btn btn-lg btn-primary">Update</button>

                        </div>
                    </form>

                </div>



            </div>
        )
    }

    componentDidMount() {
        let getToken = localStorage.getItem('ACCESS_TOKEN');
        http.get(`http://localhost:3001/api/angularUsers/` + this.state.id, { headers: { 'Authorization': `Bearer ${getToken}` } })

            .then(user => this.setState({ currentUser: user.data }))
            .catch(error => console.log(error))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)