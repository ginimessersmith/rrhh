import { Component } from '@angular/core';
import { ContractTypesService } from '../../services/contract-types.service';

@Component({
  selector: 'app-contract-types-page',
  templateUrl: './contract-types-page.component.html',
  styleUrls: ['./contract-types-page.component.css']
})
export class ContractTypesPageComponent {
  public isCreateContractType:boolean = false
  public isAllContractType:boolean = true

  constructor(
    private contractTypesService:ContractTypesService
  ){}

  CreateContractType(){
    this.isCreateContractType = true
    this.isAllContractType = false
  }
  AllContractType(){
    this.isCreateContractType = false
    this.isAllContractType = true
  }

  changeCreateContractType(newValue: boolean) {
    this.isCreateContractType = newValue;
  }

  changeAllContractType(newValue: boolean) {
    this.isAllContractType = newValue;
  }
}
