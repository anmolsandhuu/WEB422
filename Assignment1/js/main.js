/*********************************************************************************
 * WEB422 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: _Anmol Singh Sandhu_ Student ID: _135051175- Date: _7 September, 2019_
 *
 *
 ********************************************************************************/


$(function () {
    console.log("jQuery working!");

    $('#teams-menu').on('click', function () {

        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3> Teams </h3>');

        $.ajax({
            url: 'https://serverside-web422.herokuapp.com/teams',
            type: 'GET',
            datatype: 'JSON',

            success: result => {
                let TeamData = JSON.stringify(result);
                $('#data').append(TeamData);
            }

        });
    });

    $('#employees-menu').on('click', function () {

        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3> Employees </h3>');

        $.ajax({
            url: 'https://serverside-web422.herokuapp.com/employees',
            type: 'GET',
            datatype: 'JSON',

            success: result => {
                let EmployeesData = JSON.stringify(result);
                $('#data').append(EmployeesData);
            }

        });
    });
    $('#project-menu').on('click', function () {

        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3> Projects </h3>');

        $.ajax({
            url: 'https://serverside-web422.herokuapp.com/projects',
            type: 'GET',
            datatype: 'JSON',

            success: result => {
                let ProjectsData = JSON.stringify(result);
                $('#data').append(ProjectsData);
            }

        });
    });
    $('#positions-menu').on('click', function () {

        event.preventDefault();
        $('#data').empty();
        $('#data').append('<h3> Positions </h3>');

        $.ajax({
            url: 'https://serverside-web422.herokuapp.com/positions',
            type: 'GET',
            datatype: 'JSON',

            success: result => {
                let PositionData = JSON.stringify(result);
                $('#data').append(PositionData);
            }

        });
    });

});