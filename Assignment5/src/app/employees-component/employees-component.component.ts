import { Component, OnInit } from '@angular/core';
import { Employee} from '../appData/employee';
import { EmployeeService} from '../appData/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponent implements OnInit {
  private employees: Employee[];
  private getEmployeesSub: any;
  private loadingError = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe(employees => { this.employees = employees; },
      err => {
        console.log(err);
        this.loadingError = true;
      });

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.getEmployeesSub !== 'undefined') {
      this.getEmployeesSub.unsubscribe();
    }
  }
}
