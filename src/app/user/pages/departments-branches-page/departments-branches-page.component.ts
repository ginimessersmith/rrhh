import { Component, OnInit } from '@angular/core';
import { DepartmentBranchInterface, Department, Branch } from '../../interfaces/departments-branches/department-branch.interface';
import { DepartmentBranchService } from '../../services/department-branch.service';
import { DepartmentService } from '../../services/department.service';
import { BranchService } from '../../services/branch.service';
import { DepartmentInterface } from '../../interfaces/departments/department.interface';
import { BranchResponseInterface } from '../../interfaces/branches/branch.interface';

@Component({
  selector: 'enterprise-departments-branches-page',
  templateUrl: './departments-branches-page.component.html',
  styleUrls: ['./departments-branches-page.component.css']
})
export class DepartmentsBranchesPageComponent implements OnInit {

  public allDepartmentBranches!: DepartmentBranchInterface[]
  public allDepartment!: DepartmentInterface[]
  public allBranch!: BranchResponseInterface[]
  public isList:boolean=true

  constructor(
    private departmentBranchService: DepartmentBranchService,
    private departmentService: DepartmentService,
    private branchService: BranchService,
  ) { }
  ngOnInit(): void {
    const isListLocal = localStorage.getItem('isList')
    if(isListLocal) this.isList = JSON.parse(isListLocal)

    this.findAllDepartBranch()
    this.findAllDepartment()
    this.findAllBranch()
  }

  findAllDepartBranch() {
    this.departmentBranchService.allDepartmentsBranches()
      .subscribe({
        next: (resp) => {
          this.allDepartmentBranches = resp
        },
        error: (err) => {
          console.log({ err })
        },
      })
  }

  findAllDepartment() {
    this.departmentService.allDepartments()
      .subscribe({
        next: (resp) => {
          this.allDepartment = resp
        },
        error: (err) => {
          console.log({ err })
        },
      })
  }

  findAllBranch() {
    this.branchService.allBranch().subscribe({
      next: (resp) => {
        this.allBranch = resp
      },
      error: (err) => {
        console.log({ err })
      }
    })
  }

  changeAllDepBranch(newValue:DepartmentBranchInterface[]){
    console.log({newValue})
    this.allDepartmentBranches = newValue
  }

  changeSlide($event:any){
    this.isList = !this.isList
    localStorage.setItem('isList',JSON.stringify(this.isList))
  }
}
