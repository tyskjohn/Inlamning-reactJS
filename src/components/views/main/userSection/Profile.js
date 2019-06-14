import React, { Component } from 'react';
import { connect } from 'react-redux';
// import http from 'axios';
import { logout, getUserProfile } from '../../../../store/actions/authActions';
import { Route, Switch, Redirect } from 'react-router-dom';


const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.currentUser,
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: () => dispatch(getUserProfile()),
        logout: () => dispatch(logout())
    }
}

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //id: localStorage.getItem('USER_ID'),
            currentUser: this.props.currentUser
        }
    }

    componentDidMount() {
        this.props.getUserProfile()
        this.setState({ currentUser: JSON.parse(localStorage.getItem('USER')) })
    }

    logout = e => {   
        this.props.logout(this.state.id, localStorage.getItem('ACCESS_TOKEN'))
        this.setState({ isLoggedIn: false })
    }

    render() {

        if(localStorage.getItem('ACCESS_TOKEN') === null) {
            return( <Redirect to="/login" /> )
        }

        return (


            

            <div className="container">

                <button type="button" className="btn btn-primary btn-sm px-2 ml-3 mb-5 " onClick={this.logout}>Logga ut</button>

                <h2 className="mt-5 mb-5">Welcome {this.state.currentUser.firstname} {this.state.currentUser.lastname} </h2>

                {/* <div className=" mt-4">

                    <h5>Overview</h5>

                    <ul className="list-group">
                        <li className="list-group-item"><strong>Firstname:</strong> {this.props.userData.firstname}</li>
                        <li className="list-group-item"><strong>Middlename:</strong> {this.props.userData.middlename}</li>
                        <li className="list-group-item"><strong>Lastname:</strong> {this.props.userData.lastname}</li>
                        <li className="list-group-item"><strong>Date of birth:</strong> {this.props.userData.dateofbirth}</li>
                        <li className="list-group-item"><strong>Addressline:</strong> {this.props.userData.addressline}</li>
                        <li className="list-group-item"><strong>Zipcode:</strong> {this.props.userData.zipcode}</li>
                        <li className="list-group-item"><strong>City:</strong> {this.props.userData.city}</li>
                        <li className="list-group-item"><strong>Country:</strong> {this.props.userData.country}</li>
                    </ul>

                </div> */}

            </div>

        )
    }

    // componentDidMount() {
    //     let getToken = localStorage.getItem('ACCESS_TOKEN');
    //     http.get(`http://localhost:3001/api/angularUsers/` + this.state.id, { headers: { 'Authorization': `Bearer ${getToken}` } })

    //         .then(user => this.setState({ user: user.data }))
    //         .catch(error => console.log(error))

    // }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);