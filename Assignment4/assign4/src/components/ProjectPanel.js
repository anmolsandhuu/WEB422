import React, { Component } from 'react';
import * as moment from 'moment';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class ProjectPanel extends Component {
    constructor(props){
        super(props);
        this.state = {projects: [] };
    }
    componentDidMount(){
      Axios.get('https://serverside-web422.herokuapp.com/projects').then(res => {
              this.setState( { projects: res.data} );
              console.log("Axios working at ProjectPanel");
          });
  }
    render() {
        return (
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
              <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                  <tbody>
                    {this.state.projects.map((project) => {
                        return(
                              <tr key = {project._id}>
                                <td>{project.ProjectName}</td>
                                <td>Active {moment().diff(moment(project.ProjectStartDate), 'days')} days</td>
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
              <Link to= "/projects" className="btn btn-primary form-control">View All Project Data</Link>
            </div>
          </div>
        )
    }
}

