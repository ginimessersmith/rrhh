import { Component, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BonusInterface } from 'src/app/user/interfaces/bonus/bonus.interface';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { BonusService } from '../../../services/bonus.service';

@Component({
  selector: 'user-form-all-bonus-by-contract',
  templateUrl: './all-bonus-by-contract.component.html',
  styleUrls: ['./all-bonus-by-contract.component.css']
})
export class AllBonusByContractComponent {

  @Input() allContract!: ContractInterface[]
  public allBonus!: BonusInterface[]
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
    private bonusService: BonusService,
  ) { }

  onAllDeductions() {
    const {id} = this.idContractForm.value
     this.bonusService.findAllBonusByContract(id)
     .subscribe({
       next:(resp)=>{
         this.allBonus = resp
       },
       error:(err)=>{
         console.log({err})
       }
     })
   }


}
