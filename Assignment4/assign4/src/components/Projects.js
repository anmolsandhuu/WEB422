import React, { Component } from 'react'
import MainContainer from './MainContainer';
import * as moment from 'moment';
import Axios from 'axios';
import uuid from 'uuid';

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { id: uuid.v4(), projects: [] };
    }
    componentDidMount(){
        Axios.get('https://serverside-web422.herokuapp.com/projects').then(res => {
                this.setState( { projects: res.data} );
                console.log("Axios working at Project");
            });
    }

    render() {
        return (
            <MainContainer highlight="Projects">
                <h1 className="page-header">Projects</h1> 
                <div className="row">
                    <div className="col-mid-12">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                </tr>
                                {this.state.projects.map((project) =>{
                                    return (
                                    <tr key= {project._id}>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{moment(project.ProjectStartDate).format("LL")}</td>
                                        <td>{project.ProjectEndDate ? moment(project.ProjectStartDate).format("LL") : "n/a"}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </MainContainer>
        )
    }
}
