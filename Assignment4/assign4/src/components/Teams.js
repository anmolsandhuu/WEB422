import React, { Component } from 'react';
import MainContainer from './MainContainer';
import Axios from 'axios';



export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentDidMount() {
    Axios.get('https://serverside-web422.herokuapp.com/teams').then(res => {
        this.setState({ teams: res.data });
        console.log("Axios working at Teams");
      });
  }

  render() {
    return (
      <MainContainer highlight="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Projects</th>
                  <th>Employees</th>
                  <th>Team Lead</th>
                </tr>
                {this.state.teams.map((team) => {
                  return (
                    <tr key={team._id}>
                      <td>{team.TeamName}</td>
                      <td><ul>{team.Projects.map((project) => {
                        return (
                          <li key= {project._id}>{project.ProjectName}</li>
                        );
                      })}</ul></td>
                      <td>{team.Employees.length} employees</td>
                      <td>{team.TeamLead.FirstName + ' ' + team.TeamLead.LastName}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}
