import { Component, Input } from '@angular/core';
import { ContractTypesInterface } from 'src/app/user/interfaces/contract-types/contract-types.interface';

@Component({
  selector: 'user-contract-types-all-contract-types',
  templateUrl: './all-contract-types.component.html',
  styleUrls: ['./all-contract-types.component.css']
})
export class AllContractTypesComponent{

  @Input() allContractTypes!:ContractTypesInterface[]
  displayedColumns: string[] = ['type'];
  @Input() isAllContractTypes!:boolean
}
