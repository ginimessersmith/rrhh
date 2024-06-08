import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent {

  public isCreateEmployee: boolean = false;
  public isAllEmployees: boolean = true;
  public isEditEmployee: boolean = false;

  constructor() {}

  createEmployee(){
    this.isCreateEmployee = true;
    this.isAllEmployees = false;
    this.isEditEmployee = false;
  }

  allEmployee(){
    this.isCreateEmployee = false;
    this.isAllEmployees = true;
    this.isEditEmployee = false;
  }

  editEmployee(){
    this.isCreateEmployee = false;
    this.isAllEmployees = false;
    this.isEditEmployee = true;
  }

  changeCreateEmployee(newValue: boolean) {
    this.isCreateEmployee = newValue;
  }

  changeAllEmployee(newValue: boolean) {
    this.isAllEmployees = newValue;
  }

  changeEditEmployee(newValue: boolean) {
    this.isEditEmployee = newValue;
  }

}
