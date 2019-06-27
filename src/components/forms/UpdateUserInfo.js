import React, { Component } from 'react';

class UpdateUserInfo extends Component {

    componentDidMount() {
        this.inputPassword.value= "";
    }

    render() {

        return (
            <div className=" mt-5">
                <form>

                    <h5><i className="fas fa-user-cog mr-1"></i> Edit profile <button type="reset" className="btn btn-danger btn ml-3" onClick={this.props.cancelEdit} > Cancel</button> <button type="submit" className="btn btn-primary btn ml-3" onClick={this.props.saveEdit}>Save</button></h5>

                    <ul className="list-group mt-3 mb-5">
                        <li className="list-group-item"><strong>Firstname:</strong> <input className="input-border-none mr-5" type="text" id="firstname" value={this.props.currentUser.firstname} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="firstname"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Middlename:</strong> <input className="input-border-none" type="text" id="middlename" value={this.props.currentUser.middlename} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="middlename"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Lastname:</strong> <input className="input-border-none" type="text" id="lastname" value={this.props.currentUser.lastname} onChange={this.props.onChange} /> <label className="edit-label" htmlFor="lastname"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Date of birth:</strong> <input className="input-border-none" type="text" id="dateofbirth" value={this.props.currentUser.dateofbirth} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="dateofbirth"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Addressline:</strong> <input className="input-border-none" type="text" id="addressline" value={this.props.currentUser.addressline} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="addressline"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Zipcode:</strong> <input className="input-border-none" type="text" id="zipcode" value={this.props.currentUser.zipcode}  onChange={this.props.onChange} /> <label className="edit-label" htmlFor="zipcode"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>City:</strong> <input className="input-border-none" type="text" id="city" value={this.props.currentUser.city}  onChange={this.props.onChange} /> <label className="edit-label" htmlFor="city"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Country:</strong> <input className="input-border-none" type="text" id="country" value={this.props.currentUser.country} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="country"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Email:</strong> <input className="input-border-none" type="email" id="email" value={this.props.currentUser.email}  onChange={this.props.onChange} /> <label className="edit-label" htmlFor="email"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Enter your password or a new one:</strong> <input ref={el => this.inputPassword = el} className="input-border-none" type="password" id="password" value={this.props.currentUser.password} onChange={this.props.onChange}  /> <label className="edit-label" htmlFor="password"><i className="fas fa-cog"></i></label> </li>
                    </ul>

                </form>
            </div>
        )
    }
}

export default UpdateUserInfo;