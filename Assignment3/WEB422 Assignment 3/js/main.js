/*********************************************************************************
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: _Anmol Singh Sandhu_ Student ID: _135051175- Date: _15 October, 2019_
 *
 *
 ********************************************************************************/
var viewModel = {teams : [], employees: [], projects: []};  


$(function(){
    
    initializeTeams().then(initializeEmployees).then(initializeProjects).then(()=>{
        ko.applyBindings(viewModel, $("body")[0]);

        $("select.multiple").multipleSelect({filter:true});
        $("select.single").multipleSelect({single:true, filter:true});
    }).catch((err)=>{
        showGenericModal('Error', err);
    })
    $('.modal').on('hidden.bs.modal',()=>{
        $('.modal-title').empty();
        $('.modal-body').empty();
    })
    
});


function saveTeam(){                //part 2

    console.log("saveMe() working");
    let currentTeam = this;

    $.ajax({
        url: 'https://serverside-web422.herokuapp.com/team/' + currentTeam._id(),
        type: "PUT",
        contentType: "application/json",
        data: data = JSON.stringify({   Projects: currentTeam.Projects(),
                                        Employees: currentTeam.Employees(),
                                        TeamLead: currentTeam.TeamLead()}),
       
    })
    .done(function (data) {
        showGenericModal('Success', currentTeam.TeamName() + ' has been updated successfully.');
    })
    .fail(function (err) {
        showGenericModal('Error', 'There has been an error saving your team information.');
    });
}


function showGenericModal(title, message) {
    $(".modal-title").append(title);
    $(".modal-body").append(message);
    $("#genericModal").modal("show");
}


function initializeTeams(){
   
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://serverside-web422.herokuapp.com/teams-raw', // The reason why my teams are mixed is because for some reason the teams-raw data is shuffled. Please kindly let me know how can i fix this or should i reupload my web service...
            type: "GET",
            contentType: "JSON"
            
        }).done((data) => {
            viewModel.teams = ko.mapping.fromJS(data);
            resolve();
        }).fail(() =>{
            reject("Error loading the teamdata.");
        }); 
    })
}
function initializeEmployees(){
    return new Promise((resolve, reject) =>{
       $.ajax({
        url: 'https://serverside-web422.herokuapp.com/employees',
        type: "GET",
        contentType: "JSON"
       }).done((data)=>{
       //     console.log("employee : "+ data);           for debugging
           viewModel.employees = ko.mapping.fromJS(data);
           resolve();
       }).fail(()=>{
           reject("Error loading the employeedata");
       });
    })
}


function initializeProjects(){
    return new Promise((resolve, reject) =>{
       $.ajax({
        url: 'https://serverside-web422.herokuapp.com/projects',
        type: "GET",
        contentType: "JSON"
       }).done((data)=>{
      //  console.log("project : "+ data);              for debugging
           viewModel.projects = ko.mapping.fromJS(data);
           resolve();
       }).fail(()=>{
           reject("Error loading the 'project' data");
       });
    })
}
