import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';

@Component({
  selector: 'user-personal-all-contract',
  templateUrl: './all-contract.component.html',
  styleUrls: ['./all-contract.component.css']
})
export class AllContractComponent {

  @Input() allContracts!: ContractInterface[]
  @Input() viewList!: boolean

  public idContract!:string
  @Output() idContractEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'employee',
    'start_date',
    'end_date',
    'base_salary',
    'position',
    'contract_type'
  ]

  constructor(){}

  sendIdContract(id:string){
    this.idContract = id
    this.emitIdContact()
  }

  emitIdContact(){
    this.idContractEmit.emit(this.idContract)
  }

}
