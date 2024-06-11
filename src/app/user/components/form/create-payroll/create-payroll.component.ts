import { Component, Input } from '@angular/core';
import { ManagementInterface } from 'src/app/user/interfaces/managements/management.interface';
import { PeriodsInterface } from 'src/app/user/interfaces/periods/periods';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayrollService } from '../../../services/payroll.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { CreatePayrollInterface } from '../../../interfaces/payrolls/create-payroll.interface';

@Component({
  selector: 'user-form-create-payroll',
  templateUrl: './create-payroll.component.html',
  styleUrls: ['./create-payroll.component.css']
})
export class CreatePayrollComponent {

  @Input() allPeriods!: PeriodsInterface[]
  @Input() allManagement!: ManagementInterface[]

  public Dialog = new DialogComponent(this.dialog)
  public createPayrollForm: FormGroup = this.formBuilder.group({
    periodId: ['', [Validators.required, Validators.minLength(3)], []],
    managementId: ['', [Validators.required, Validators.minLength(3)], []],
  })

  constructor(
    private formBuilder: FormBuilder,
    private payrollService: PayrollService,
    public dialog: MatDialog,
  ) { }

  onCreateForm(){
    const createPayroll:CreatePayrollInterface ={
      ...this.createPayrollForm.value
    }

    this.payrollService.createPayroll(createPayroll)
    .subscribe({
      next:()=>{  
        this.Dialog.openDialogSucces()
      },
      error:(err)=>{
        console.log({err})
        this.Dialog.openDialogError()
      }
    })
  }

}
