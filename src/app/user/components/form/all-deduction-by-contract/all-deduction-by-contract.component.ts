import { Component, Input } from '@angular/core';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeductionsService } from '../../../services/deductions.service';


@Component({
  selector: 'user-form-all-deduction-by-contract',
  templateUrl: './all-deduction-by-contract.component.html',
  styleUrls: ['./all-deduction-by-contract.component.css']
})
export class AllDeductionByContractComponent {

  @Input() allContract!: ContractInterface[]
  public allDeduction!: DeductionInterface[]
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

  public idContractForm: FormGroup = this.formBuilder.group({
    id: ['', [Validators.required, Validators.minLength(3)], []]
  })

  constructor(
    private formBuilder: FormBuilder,
    private deductionsService: DeductionsService,
  ) { }

  onAllDeductions() {
   const {id} = this.idContractForm.value
    this.deductionsService.findAllDeductionByContract(id)
    .subscribe({
      next:(resp)=>{
        this.allDeduction = resp
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

}
