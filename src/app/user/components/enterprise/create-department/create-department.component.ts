import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../../services/department.service';
import { CreateDepartmentInterface } from '../../../interfaces/departments/createDepartmentRequest.interface';
import Swal from 'sweetalert2';
import { DepartmentInterface } from 'src/app/user/interfaces/departments/department.interface';

@Component({
  selector: 'user-enterprise-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {

  public allDep!:DepartmentInterface[]

  @Output() allDepartmentEmit = new EventEmitter<DepartmentInterface[]>()

  public createDepartmentForm: FormGroup = this.FormBuilder.group({
    department: ['', [Validators.required, Validators.minLength(1)], []]
  })

  constructor(
    private FormBuilder: FormBuilder,
    private DepartmentService: DepartmentService,
  ) { }

  onCreateDepartment() {

    const createDepartment: CreateDepartmentInterface = {
      ...this.createDepartmentForm.value
    }

    this.DepartmentService.createDepartment(createDepartment)
      .subscribe({
        next: (resp) => {
          this.allDepartmentService()
          Swal.fire('', 'Departamento creado con exito', 'success')
        },
        error: (err) => {
          console.log({ err })
          Swal.fire('', 'Error al crear un Departamento', 'error')
        }
      })
  }

  allDepartmentService(){
    this.DepartmentService.allDepartments()
    .subscribe({
      next:(resp)=>{
        this.allDep = resp
        console.log('all department service in create')
        console.log({resp})
        this.emitValue()
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

  emitValue(){
    this.allDepartmentEmit.emit(this.allDep)
  }
}
