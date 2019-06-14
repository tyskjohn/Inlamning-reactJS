import React, { Component } from 'react';

class UpdateUserInfo extends Component {
    render() {
        return (
            <div className=" mt-5">
                <form>

                    <h5><i class="fas fa-user-cog mr-1"></i> Edit profile</h5>

                    <ul className="list-group mt-3 mb-5">
                        <li className="list-group-item"><strong>Firstname:</strong> <input className="input-border-none mr-5" type="text" id="firstname" value={this.props.currentUser.firstname} /> <label className="edit-label" htmlFor="firstname"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Middlename:</strong> <input className="input-border-none" type="text" id="middlename" value={this.props.currentUser.middlename} /> <label className="edit-label" htmlFor="middlename"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Lastname:</strong> <input className="input-border-none" type="text" id="lastname" value={this.props.currentUser.lastname} /> <label className="edit-label" htmlFor="lastname"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Date of birth:</strong> <input className="input-border-none" type="text" id="dateofbirth" value={this.props.currentUser.dateofbirth} /> <label className="edit-label" htmlFor="dateofbirth"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Addressline:</strong> <input className="input-border-none" type="text" id="addressline" value={this.props.currentUser.adressline} /> <label className="edit-label" htmlFor="addressline"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Zipcode:</strong> <input className="input-border-none" type="text" id="zipcode" value={this.props.currentUser.zipcode} /> <label className="edit-label" htmlFor="zipcode"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>City:</strong> <input className="input-border-none" type="text" id="city" value={this.props.currentUser.city} /> <label className="edit-label" htmlFor="city"><i className="fas fa-cog"></i></label> </li>
                        <li className="list-group-item"><strong>Country:</strong> <input className="input-border-none" type="text" id="country" value={this.props.currentUser.country} /> <label className="edit-label" htmlFor="country"><i className="fas fa-cog"></i></label> </li>
                    </ul>

                </form>
            </div>
        )
    }
}

export default UpdateUserInfo;