import { Component, Input } from '@angular/core';
import { DepartmentBranchInterface } from 'src/app/user/interfaces/departments-branches/department-branch.interface';

@Component({
  selector: 'user-enterprise-all-department-branch',
  templateUrl: './all-department-branch.component.html',
  styleUrls: ['./all-department-branch.component.css']
})
export class AllDepartmentBranchComponent {
 
  @Input() allDepartmentBranches!:DepartmentBranchInterface[]
  displayedColumns: string[] = ['department', 'branch'];
  @Input() isAllDep!:boolean
}
