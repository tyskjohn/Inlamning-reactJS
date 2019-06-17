import React, { Component } from 'react';
import http from 'axios';
import IssueForm from '../../../forms/IssueForm.js'

class CustomerIssues extends Component {

    constructor(props) {
        super(props)

        this.state = {
            issues: {}
        }
    }

    render() {
        const { issues } = this.state;

        return (
            <div className="container">
                <h4 className="mt-5 mb-4">Create an issue for Customer </h4>

                <IssueForm />

                <h4 className="mt-3 mb-5">Issues</h4>
                <ul className="list-group">
                {
                    issues.length ? issues.map( (issue) => <li key={issue._id} className="list-group-item" > <strong>Title: </strong>{issue.title} <strong>Description: </strong> {issue.description} <strong>Status: </strong> {issue.status} <button type="button" className="add-issue btn btn-danger btn-sm">remove</button> </li> )
                    : 
                        null
                }       
                </ul>         

            </div>
        )
    }

    componentDidMount() {
        let getToken = localStorage.getItem('ACCESS_TOKEN');
        
        http.get(`http://localhost:3001/api/issues/all`, { headers: { 'Authorization': `Bearer ${getToken}` } } )
            .then(res => this.setState({ issues: res.data }))
            .catch(error => console.log(error))

    }

}

export default CustomerIssues;