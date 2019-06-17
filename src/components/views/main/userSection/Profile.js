import React, { Component } from 'react';
import { connect } from 'react-redux';
// import http from 'axios';
import { logout, getUserProfile, updateProfile } from '../../../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

import UpdateUserInfo from '../../../forms/UpdateUserInfo'


const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => dispatch(getUserProfile()),
        updateProfile: (currentUser, ACCESS_TOKEN) => dispatch(updateProfile(currentUser, ACCESS_TOKEN)),
        logout: () => dispatch(logout())
    }
}

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentUser: this.props.currentUser,
            isEditing: false
        }
    }

    componentDidMount() {
        this.props.getUserProfile()
        this.setState({ currentUser: JSON.parse(localStorage.getItem('USER')) })
    }

    componentWillReceiveProps() {
        this.setState({ isEditing: false })
    }

    onChange = e => {
        const currentUser = this.state.currentUser
        currentUser[e.target.id] = e.target.value
        return this.setState({ currentUser: currentUser })
    }

    saveEdit = e => {
        e.preventDefault()
        this.props.updateProfile(this.state.currentUser, localStorage.getItem('ACCESS_TOKEN'))
        this.props.history.push('/profile')
    }  

    cancelEdit = e => {
        this.setState({ currentUser: JSON.parse(localStorage.getItem('USER')) })
        this.props.history.push('/profile')
    }

    toggleEdit = e => {
        this.setState({ isEditing: !this.setState.isEditing })
    }

    logout = e => {   
        this.props.logout(this.state.id, localStorage.getItem('ACCESS_TOKEN'))
        this.setState({ isLoggedIn: false })
    }

    render() {

        if(localStorage.getItem('ACCESS_TOKEN') === null) {
            return( <Redirect to="/login" /> )
        }

        if(this.state.isEditing) {
            return (
                <div className="container">

                    <h2 className="mt-3 mb-5">Welcome {this.state.currentUser.firstname} {this.state.currentUser.lastname}</h2>

                    <UpdateUserInfo currentUser={this.state.currentUser} onChange={this.onChange} saveEdit={this.saveEdit} cancelEdit={this.cancelEdit} />

                </div>
            )
        }

        return (

            <div className="container">
                
                <h2 className="mt-3 mb-5">Welcome {this.state.currentUser.firstname} {this.state.currentUser.lastname}</h2>

                <div className=" mt-5">

                    <h5><i className="fas fa-user mr-1"></i> Overview <button type="button" className="btn btn-warning btn ml-3" onClick={this.toggleEdit} ><i className="fas fa-cog"></i> Edit Profile</button> <button type="button" className="btn btn-primary btn ml-3" onClick={this.logout}>Logga ut</button></h5>

                    <ul className="list-group mt-3 mb-5">
                        <li className="list-group-item"><strong>Firstname:</strong> {this.props.currentUser.firstname}</li>
                        <li className="list-group-item"><strong>Middlename:</strong> {this.props.currentUser.middlename}</li>
                        <li className="list-group-item"><strong>Lastname:</strong> {this.props.currentUser.lastname}</li>
                        <li className="list-group-item"><strong>Date of birth:</strong> {this.props.currentUser.dateofbirth}</li>
                        <li className="list-group-item"><strong>Addressline:</strong> {this.props.currentUser.addressline}</li>
                        <li className="list-group-item"><strong>Zipcode:</strong> {this.props.currentUser.zipcode}</li>
                        <li className="list-group-item"><strong>City:</strong> {this.props.currentUser.city}</li>
                        <li className="list-group-item"><strong>Country:</strong> {this.props.currentUser.country}</li>
                    </ul>

                </div>

            </div>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);