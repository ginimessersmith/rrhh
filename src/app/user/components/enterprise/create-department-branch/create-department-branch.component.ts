import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DepartmentBranchInterface } from 'src/app/user/interfaces/departments-branches/department-branch.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentBranchService } from '../../../services/department-branch.service';
import { CreateDepartmentBranchInterface } from '../../../interfaces/departments-branches/create-departmet-branch.interface';
import Swal from 'sweetalert2';
import { DepartmentInterface } from 'src/app/user/interfaces/departments/department.interface';
import { BranchResponseInterface } from 'src/app/user/interfaces/branches/branch.interface';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'user-enterprise-create-department-branch',
  templateUrl: './create-department-branch.component.html',
  styleUrls: ['./create-department-branch.component.css']
})
export class CreateDepartmentBranchComponent implements OnInit {

  @Input() allDepartment!:DepartmentInterface[]
  @Input() allBranch!:BranchResponseInterface[]

  public allDepartmentBranches!: DepartmentBranchInterface[]
  @Output() allDepBranchEmit = new EventEmitter<DepartmentBranchInterface[]>

  public createDepartmentForm:FormGroup = this.formBuilder.group({
    departmentId:['',[Validators.required,Validators.minLength(3)],[]],
    branchId:['',[Validators.required,Validators.minLength(3)],[]]
  })
  ngOnInit(): void {
  }

  constructor(
    public dialog: MatDialog,
    private formBuilder:FormBuilder,
    private DepartmentBranchService:DepartmentBranchService,
  ){}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  onCreateDepBranch(){

    const createDepartmentBranchInterface:CreateDepartmentBranchInterface ={
      ...this.createDepartmentForm.value
    }
    console.log({createDepartmentBranchInterface})
    this.DepartmentBranchService.createDepartmentBranch(createDepartmentBranchInterface)
    .subscribe({
      next:(resp)=>{
        this.allDepartmentBranch()
        this.openDialog('200ms', '0ms')
        // Swal.fire('','creado con exito','success')
      },
      error:()=>{
        Swal.fire('','Error al guardar','error')
      }
    })
  }

  allDepartmentBranch(){
    this.DepartmentBranchService.allDepartmentsBranches()
    .subscribe({
      next:(resp)=>{
        this.allDepartmentBranches = resp
        this.emitValue()
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

  emitValue(){
    this.allDepBranchEmit.emit(this.allDepartmentBranches)
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
