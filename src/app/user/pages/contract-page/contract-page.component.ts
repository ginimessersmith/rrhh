import { Component, OnInit } from '@angular/core';
import { ContractInterface } from '../../interfaces/deductions/contract.interface';
import { ContractsService } from '../../services/contracts.service';
import { ContractTypesInterface } from '../../interfaces/contract-types/contract-types.interface';
import { ContractTypesService } from '../../services/contract-types.service';
import { EmployeeResponseInterface } from '../../interfaces/employees/employee.interface';
import { PositionInterface } from '../../interfaces/positions/Position.interface';
import { PositionsService } from '../../services/positions.service';
import { EmployeeService } from '../../services/employees.service';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit{

  public viewList: boolean = true
  public viewOneContract: boolean = false
  public allEmployees!: EmployeeResponseInterface[]
  public allPositions!: PositionInterface[]
  public allContractTypes!: ContractTypesInterface[]
  public allContracts!: ContractInterface[]
  public idContract!: string
  public contract!: ContractInterface

  constructor(
    private contractService: ContractsService,
    private contractTypesSerice: ContractTypesService,
    private positionsService: PositionsService,
    private employeesService: EmployeeService
  ) { }

  ngOnInit(): void {
    const viewListLocal = localStorage.getItem('viewListContracts');
    const viewOneContractLocal = localStorage.getItem('viewOneContract');
    if(viewOneContractLocal) this.viewOneContract = JSON.parse(viewOneContractLocal)
    if(viewListLocal) this.viewList = JSON.parse(viewListLocal)

    this.findAllContracts()
    this.findAllContractTypes()
    this.findAllPositions()
    this.findAllEmployees()
  }

  findAllEmployees(){
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (resp)=>{
        this.allEmployees = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  findAllPositions(){
    this.positionsService.getAllPositions()
    .subscribe({
      next: (resp) =>{
        this.allPositions = resp
      },
      error: (err)=>{
        console.log({err})
      }
    })
  }

  findAllContractTypes(){
    this.contractTypesSerice.getAllContractTypes()
    .subscribe({
      next: (resp) => {
        this.allContractTypes = resp
      },
      error: (err) => {
        console.log({ err })
      }
    })
  }

  findAllContracts(){
    this.contractService.getAllContracts()
      .subscribe({
        next: (resp) => {
          this.allContracts = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeSlideToggle(){
    this.viewList = !this.viewList
    localStorage.setItem('viewLIstContracts', JSON.stringify(this.viewList))
  }

  changeIdContract(id: string){
    this.idContract = id
    this.viewOneContract = !this.viewOneContract
    this.oneContract()
    localStorage.setItem('viewOneContract', JSON.stringify(this.viewOneContract))
  }

  changeViewOneContract(newValue: boolean){
    console.log({newValue})
    this.viewOneContract = newValue
    localStorage.setItem('viewOneContract', JSON.stringify(this.viewOneContract))
  }

  oneContract(){
    this.contractService.oneContract(this.idContract)
      .subscribe({
        next: (resp)=>{
          this.contract = resp
          localStorage.setItem('oneContract', JSON.stringify(this.contract))
          console.log({ resp })
        },
        error: (err)=>{
          console.log({ err })
        }
      })
  }

  changeAllContracts(contracts: ContractInterface[]){
    this.allContracts = contracts
    console.log({ contracts })
  }
}
