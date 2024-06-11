import { Component, OnInit } from '@angular/core';
import { ContractInterface } from '../../interfaces/deductions/contract.interface';
import { SettlementsService } from '../../services/settlements.service';
import { SettlementInterface } from '../../interfaces/settlements/settlement.interface';

@Component({
  selector: 'app-settlements-page',
  templateUrl: './settlements-page.component.html',
  styleUrls: ['./settlements-page.component.css']
})
export class SettlementsPageComponent implements OnInit {

  public allContract!: ContractInterface[]
  public allSettlements!: SettlementInterface[]

  constructor(
    private settlementsService: SettlementsService
  ) { }
  ngOnInit(): void {
    this.findAllContracts()
    this.findAllSettlements()
  }

  findAllContracts() {
    this.settlementsService.findAllContract()
      .subscribe({
        next: (res) => {
          this.allContract = res
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllSettlements() {
    this.settlementsService.findAllSettlements()
      .subscribe({
        next: (res) => {
          this.allSettlements = res
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

}
