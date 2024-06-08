import { Component, Input, OnInit } from '@angular/core';
import { DepartmentBranchInterface } from 'src/app/user/interfaces/departments-branches/department-branch.interface';
import { FormBuilder } from '@angular/forms';
import { DepartmentBranchService } from '../../../services/department-branch.service';

@Component({
  selector: 'user-enterprise-create-department-branch',
  templateUrl: './create-department-branch.component.html',
  styleUrls: ['./create-department-branch.component.css']
})
export class CreateDepartmentBranchComponent implements OnInit {
  @Input() allDepartmentBranches!:DepartmentBranchInterface[]

  ngOnInit(): void {
  }

  constructor(
    private formBuilder:FormBuilder,
    private DepartmentBranchService:DepartmentBranchService,
  ){}

  

}
