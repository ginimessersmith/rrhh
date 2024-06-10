import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeductionsService } from '../../../services/deductions.service';
import { CreateDeductionInterface } from '../../../interfaces/deductions/create-deduction.interface';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';

@Component({
  selector: 'user-form-create-deduction',
  templateUrl: './create-deduction.component.html',
  styleUrls: ['./create-deduction.component.css']
})
export class CreateDeductionComponent {

  public Dialog = new DialogComponent(this.dialog)
  @Input() allContracts!: ContractInterface[]

  public allDeduction!: DeductionInterface[]
  @Output() allDeductionsEmit = new EventEmitter<DeductionInterface[]>()

  public createDeductionForm: FormGroup = this.formBuilder.group({
    contractId: ['', [Validators.required, Validators.minLength(3)], []],
    amount: [0, [Validators.required], []],
    description: ['', [Validators.required, Validators.minLength(3)], []],
    date: ['', [Validators.required, Validators.minLength(3)], []],

  })

  constructor(
    private formBuilder: FormBuilder,
    private deductionsService: DeductionsService,
    private dialog: MatDialog
  ) { }

  onCreateDeduction() {
    const { date, ...resData } = this.createDeductionForm.value

    const createDeduction: CreateDeductionInterface = {
      ...resData,
      date: this.formatDate(date)
    }
    this.deductionsService.createDeduction(createDeduction)
      .subscribe({
        next: () => {
          this.findAllDeductions()
          this.Dialog.openDialogSucces()
        },
        error: (err) => {
          this.Dialog.openDialogError()
          console.log({ err })
        }
      })
  }

  findAllDeductions() {
    this.deductionsService.findAllDeduction()
      .subscribe({
        next: (resp) => {
          this.allDeduction = resp
          this.emitDeductions()
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  emitDeductions(){
    this.allDeductionsEmit.emit(this.allDeduction)
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
