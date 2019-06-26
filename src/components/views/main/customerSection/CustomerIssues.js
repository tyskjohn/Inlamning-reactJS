import React, { Component } from 'react';
import http from 'axios';

class CustomerIssues extends Component {

    constructor(props) {
        super(props)

        this.state = {
            issues: {},
        }
    }

    componentDidMount() {
        let getToken = localStorage.getItem('ACCESS_TOKEN');
        
        http.get(`http://localhost:3001/api/issues/all`, { headers: { 'Authorization': `Bearer ${getToken}` } } )
            .then(res => this.setState({ issues: res.data }))
            .catch(error => console.log(error))
    }

    // deleteIssue = (e) => {
    //     let getToken = localStorage.getItem('ACCESS_TOKEN');
    //     let issueID = this.state.issues._id;

    //     console.log("test")

    //     const issues = Object.assign({}, this.state.issues);
    //     http.delete(`http://localhost:3001/api/issues/${issueID}`, { headers: { 'Authorization': `Bearer ${getToken}` } })
    //     // //issues.splice(index, 1);
    //     //this.setState({ issues: issues })
    // }

    render() {
        const { issues } = this.state;

        return (
            <div className="container">

                <h4 className="mt-3 mb-5">Issues</h4>
                <ul className="list-group mb-5">
                {
                    issues.length ? issues.map( (issue) => <li key={issue._id} className="list-group-item" > <strong>Title: </strong>{issue.title} <strong>Description: </strong> {issue.description} <strong>Status: </strong> {issue.status} <strong>Customer: </strong> {issue.customeremail} <button type="button" className="add-issue btn btn-danger btn-sm">remove</button> </li> )
                    : 
                        null
                }       
                </ul>         

            </div>
        )
    }
}

export default CustomerIssues;