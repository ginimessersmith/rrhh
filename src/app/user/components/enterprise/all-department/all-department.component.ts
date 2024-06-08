import { Component, Input } from '@angular/core';
import { DepartmentInterface } from 'src/app/user/interfaces/departments/department.interface';

@Component({
  selector: 'user-enterprise-all-department',
  templateUrl: './all-department.component.html',
  styleUrls: ['./all-department.component.css']
})
export class AllDepartmentComponent {
  @Input() isAll!:boolean
  @Input() allDepartments!:DepartmentInterface[]
  displayedColumns: string[] = ['department'];
}
