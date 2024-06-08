import { Component, OnInit } from '@angular/core';
import { DepartmentBranchInterface, Department } from '../../interfaces/departments-branches/department-branch.interface';
import { DepartmentBranchService } from '../../services/department-branch.service';

@Component({
  selector: 'enterprise-departments-branches-page',
  templateUrl: './departments-branches-page.component.html',
  styleUrls: ['./departments-branches-page.component.css']
})
export class DepartmentsBranchesPageComponent implements OnInit {

  public allDepartmentBranches!: DepartmentBranchInterface[]

  constructor(
    private departmentBranchService: DepartmentBranchService,
  ) { }
  ngOnInit(): void {

    this.findAllDepartBranch()

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
}
