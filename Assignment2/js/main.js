/*********************************************************************************
 * WEB422 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: _Anmol Singh Sandhu_ Student ID: _135051175- Date: _27 September, 2019_
 *
 *
 ********************************************************************************/

let employeesModal = []; //empty array that will hold 300 employees values

$(function () {
    console.log("jQuery working!"); //testing if jQuery is working
    initializeEmployeesModel(); // calling initializeEmployeesModel which populate local array from making an ajax Call from TeamsAPI


    $('#employeeSearch').keyup(function () { //every word in being sent to refreshEmployeeRows that calls getFilteredEmployeesModal with with #employeeSearch. We also use keyup meathod to do this more efficiently
        event.preventDefault(); //prevents reloading
        let currentSearch = $(this).val(); // stores #employeeSearch value
        refreshEmployeeRows(getFilteredEmployeesModal(currentSearch));

    });
    $('.body-rows').on('click', '.body-row', function (event) { // "click" event for every single (current and future) element with the class "bodyrow" 
        event.preventDefault();
        let employeeSelected = getEmployeeModalById($(this).attr("data-id")); //calling getEmployeeModalById with current values #ID

        // let employeeHireDate = employeeSelected.HireDate;
        let hireDate = moment(employeeSelected.HireDate); //make a moment obj with current selection of employees hire date
        employeeSelected.HireDate = hireDate.utc().format("ll"); //format 
        let templateClickedEmployee =
            _.template('<strong>Address: </strong>' +
                '<%- employeeFiltered.AddressStreet %> ' +
                '<%- employeeFiltered.AddressCity %>, ' +
                '<%- employeeFiltered.AddressState %> ' +
                '<%- employeeFiltered.AddressZip %><br><strong>Phone Number: </strong>' +
                '<%- employeeFiltered.PhoneNum %> ext: ' +
                '<%- employeeFiltered.Extension %><br><strong>Hire Date: </strong>' +
                '<%- employeeFiltered.HireDate %>');
        let templateClickedEmployeeResult = templateClickedEmployee({
            'employeeFiltered': employeeSelected
        });
        showGenericModal(employeeSelected.FirstName + " " + employeeSelected.LastName, templateClickedEmployeeResult);

    });

});

function initializeEmployeesModel() { //This function will populate the "employeesModel" array, by issuing an AJAX call to your Teams API 
    $.ajax({
        url: 'https://serverside-web422.herokuapp.com/employees',
        type: 'GET',
        Type: 'JSON'
    }).done((data) => {
        employeesModal = data;
        //console.log(employeesModal); // for checking if values are being called
        refreshEmployeeRows(employeesModal);

    }).fail(() => {
        showGenericModal('Error', 'Unable to get Employees');
    });
}

function showGenericModal(modalTitle, modalMsg) {
    $('.modal-title').empty().append(modalTitle);
    $('.modal-body').empty().append(modalMsg);
    $('#genericModel').modal('show');
}

function refreshEmployeeRows(employees) { // defines a lodash template
    let tableTemplate = _.template('<% _.forEach(employees, (employee) => { %>' +
        '<div class="row body-row" data-id="' +
        '<%- employee._id %>"> <div class="col-xs-4 body-column">' +
        '<%- employee.FirstName %></div> <div class="col-xs-4 body-column">' +
        '<%- employee.LastName %></div> <div class="col-xs-4 body-column">' +
        '<%- employee.Position.PositionName %></div> </div>' + '<% }); %>');

    let templateData = tableTemplate({
        'employees': _.take(employees, 300)
    }); //invoking lodash template with employees(300 employees) array as parameter
    $('#employees-table').empty().append(templateData); //pushing the data on HTMl
}

function getFilteredEmployeesModal(filterString) {
    let filerData = _.filter(employeesModal, (employee) => { // using lodash _.filter to filter the employeesModal array 
        return employee.FirstName.toUpperCase().includes(filterString.toUpperCase()) ||
               employee.LastName.toUpperCase().includes(filterString.toUpperCase()) ||
               employee.Position.PositionName.toUpperCase().includes(filterString.toUpperCase());
    });
    //   console.log(filerData);
    return filerData; //return the filtered employee value
}

function getEmployeeModalById(employeeId) {
    let copy;
    $.grep(employeesModal, (employee) => { //using regex to take employee data from array
        if (employee._id == employeeId) { // comparison with incoming data
            copy = _.cloneDeep(employee); // saves a deepcopy of an obj 
        }
        return false; //if comparison fail then return false
    });
    //  console.log(copy);
    return copy; //return the deepcopy
}