import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { DepartmentInterface } from '../../interfaces/departments/department.interface';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.css']
})
export class DepartmentsPageComponent implements OnInit {
  public isAllDepartment: boolean = false
  public allDepartment!: DepartmentInterface[]
  // public checked:boolean=true
  constructor(
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    const activeDepartment = localStorage.getItem('activeDepartment')
    if (activeDepartment) {
      this.isAllDepartment = JSON.parse(activeDepartment)
    }
    this.allDepartmentService()
  }

  activeLista(event: any) {
    this.isAllDepartment = event.checked;
    localStorage.setItem('activeDepartment', JSON.stringify(this.isAllDepartment))
  }

  allDepartmentService() {
    this.departmentService.allDepartments()
      .subscribe({
        next: (resp) => {
          this.allDepartment = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeAllDepartment(newValue: DepartmentInterface[]) {
    console.log({newValue})
    this.allDepartment = newValue
  }

}
