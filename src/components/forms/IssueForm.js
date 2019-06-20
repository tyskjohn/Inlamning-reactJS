import React, { Component } from 'react';
import http from 'axios';
import { withRouter } from 'react-router-dom'

class IssueForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            status: 'notstarted'
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        http
            .post('http://localhost:3001/api/issues/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/customerissues'))
            .catch(error => {
                console.log(error)
                window.alert("Invalid form")
            })
    }

    render() {

        const { title, description, status } = this.state;

        return (

            <form onSubmit={this.handleSubmit}>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} onChange={this.handleChange} className="form-control" id="title" />
                    </div>
                    <div className="form-group col-md-4">

                        <label htmlFor="status">Status</label>
                        <select className="form-control" id="status" value={status} onChange={this.handleChange}>
                            <option value="notstarted" className="notstarted" >Not started</option>
                            <option value="active" className="active" >Active</option>
                            <option value="finished" className="finished" >Finished</option>
                        </select>
                        
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="description">Short descrition</label>
                        <input type="text" value={description} onChange={this.handleChange} className="form-control" id="description" />
                    </div>
                </div>


                <button type="submit" value="Create" className="mt-3 btn btn-primary mb-5">Create issue</button>

            </form>


        )
    }

}

export default withRouter(IssueForm);