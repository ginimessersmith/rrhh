import { Component, OnInit } from '@angular/core';
import { ContractTypesService } from '../../services/contract-types.service';
import { ContractTypesInterface } from '../../interfaces/contract-types/contract-types.interface';

@Component({
  selector: 'app-contract-types-page',
  templateUrl: './contract-types-page.component.html',
  styleUrls: ['./contract-types-page.component.css']
})
export class ContractTypesPageComponent implements OnInit{

  public allContractTypes!: ContractTypesInterface[]
  public isCreateContractType:boolean = false
  public isAllContractTypes:boolean = true

  constructor(
    private contractTypesService:ContractTypesService
  ){}

  ngOnInit(): void {
    this.findAllContractTypes()
  }

  findAllContractTypes(){
    this.contractTypesService.getAllContractTypes()
      .subscribe({
        next: (resp) => {
          this.allContractTypes = resp
          console.log(this.allContractTypes)
        },
        error: (err) => {
          console.log({ err })
        },
      })
  }

  CreateContractType(){
    this.isCreateContractType = true
    this.isAllContractTypes = false
  }
  AllContractType(){
    this.isCreateContractType = false
    this.isAllContractTypes = true
  }

  changeCreateContractType(newValue: boolean) {
    this.isCreateContractType = newValue;
  }

  changeAllContractType(newValue: boolean) {
    this.isAllContractTypes = newValue;
  }
}
