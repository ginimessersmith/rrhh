import { Component, EventEmitter, Output } from '@angular/core';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeductionsService } from '../../../services/deductions.service';
import { DeductionByDateInterface } from '../../../interfaces/deductions/deductions-by-date.interface';
import { formatDate } from 'src/app/user/utils/functions.utils';

@Component({
  selector: 'user-form-all-deduction-between-date',
  templateUrl: './all-deduction-between-date.component.html',
  styleUrls: ['./all-deduction-between-date.component.css']
})
export class AllDeductionBetweenDateComponent {

  public allDeductionByDate!: DeductionInterface[]

  public idDeduction!:string
  @Output() idDeductionEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'amount',
    'description',
    'contract_start_date',
    'contract_end_date',
    'employee',
    'position',
    'department',
    'branch',
    'contract_type'
  ]

  public allDeductionForm: FormGroup = this.formBuilder.group({
    start: ['', [Validators.required, Validators.minLength(3)], []],
    end: ['', [Validators.required, Validators.minLength(3)], []],
  })
  constructor(
    private formBuilder: FormBuilder,
    private deductionsService: DeductionsService,
  ) { }

  onDeductionByDate() {
    const { start, end } = this.allDeductionForm.value
    const formatStart = formatDate(start)
    const formatEnd = formatDate(end)
    const deductionByDate: DeductionByDateInterface = {
      start: formatStart,
      end: formatEnd
    }
    console.log({deductionByDate})
    this.deductionsService.findAllDeductionRangeDate(deductionByDate)
      .subscribe({
        next: (resp) => {
          this.allDeductionByDate = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  sendIdDeduction(id:string){
    this.idDeduction = id
    this.emitIdDeduction()
  }

  emitIdDeduction(){
    this.idDeductionEmit.emit(this.idDeduction)
  }



}
