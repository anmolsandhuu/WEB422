import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';



export default class TeamsPanel extends Component {
    constructor(props){
        super(props);
        this.state = { teams: [] };
    }
    componentDidMount(){
      Axios.get('https://serverside-web422.herokuapp.com/teams').then(res => {
              this.setState( {  teams: res.data} ); 
              console.log("Axios working at TeamPanel");
          });
  }
    render() {
        return (

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Teams</h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive overview-table">
                  <table className="table table-striped table-bordered">
                    <tbody>
        
                    {this.state.teams.map((team) => {
                        return(
                         
                              <tr key = {team._id}>
                                <td >{team.TeamName}</td>
                                <td >{team.Employees.length} Employees</td>
                            </tr>
        
                          
                        );
                    })}
                  </tbody>
                
                  </table>
                </div>
                <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
              </div>
            </div>
       
        )
    }
}
