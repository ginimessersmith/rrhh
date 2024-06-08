import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateBranchInterface } from '../../../interfaces/branches/create-branch.interface';
import { BranchService } from '../../../services/branch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-enterprise-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})
export class CreateBranchComponent {

  createBranch: boolean = false
  allBranch: boolean = true

  @Output() createBranchEmit = new EventEmitter<boolean>()
  @Output() allBranchEmit = new EventEmitter<boolean>()

  public createBranchForm: FormGroup = this.formBuilder.group({
    branch: ['', [Validators.required, Validators.minLength(3)], []],
  })

  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService,
  ) { }

  onCreate() {
    const createBranchInterface: CreateBranchInterface = {
      ...this.createBranchForm.value
    }
    this.branchService.createBranch(createBranchInterface)
      .subscribe({
        next: (resp) => {
          this.emitValues()
          Swal.fire('', 'Sucursal creada con exito', 'success')
        },
        error: () => {
          Swal.fire('', 'Hubo un error al crear la sucursal', 'error')
        }
      })

  }

  emitValues() {
    this.createBranchEmit.emit(this.createBranch)
    this.allBranchEmit.emit(this.allBranch)
  }
}
