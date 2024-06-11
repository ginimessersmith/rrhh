import { Component, Input } from '@angular/core';
import { SettlementInterface } from 'src/app/user/interfaces/settlements/settlement.interface';

@Component({
  selector: 'user-form-all-settlement',
  templateUrl: './all-settlement.component.html',
  styleUrls: ['./all-settlement.component.css']
})
export class AllSettlementComponent {

  @Input() allSettlements!:SettlementInterface[]

  displayColumns:string[]=[
    'employee_name',
    'employee_cellphone',
    'employee_address',
    'settlementDate',
    'start_date',
    'end_date',
    'base_salary',
    'totalAmount',
    'contract_start',
    'contract_End',
  ]

}
