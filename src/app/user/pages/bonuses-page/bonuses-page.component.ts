import { Component, OnInit } from '@angular/core';
import { BonusInterface } from '../../interfaces/bonus/bonus.interface';
import { BonusService } from '../../services/bonus.service';
import { ContractInterface } from '../../interfaces/deductions/contract.interface';

@Component({
  selector: 'app-bonuses-page',
  templateUrl: './bonuses-page.component.html',
  styleUrls: ['./bonuses-page.component.css']
})
export class BonusesPageComponent implements OnInit {

  public allBonus!: BonusInterface[]
  public allContracts!: ContractInterface[]
  public viewOneBonus: boolean = false
  public viewAllBonus: boolean = false
  public idBonus!:string
  public bonus!:BonusInterface

  constructor(
    private bonusService: BonusService
  ) { }

  ngOnInit(): void {
    const viewOneBonusLocal = localStorage.getItem('viewOneBonus')
    const viewAllBonusLocal = localStorage.getItem('viewAllBonus')
    if (viewOneBonusLocal) this.viewOneBonus = JSON.parse(viewOneBonusLocal)
    if (viewAllBonusLocal) this.viewAllBonus = JSON.parse(viewAllBonusLocal)

    this.findAllContracts()
    this.findAllBonus()
  }

  changeSlideToggle() {
    this.viewAllBonus = !this.viewAllBonus
    localStorage.setItem('viewAllBonus', JSON.stringify(this.viewAllBonus))
  }

  findAllContracts() {
    this.bonusService.findAllContract()
      .subscribe({
        next: (resp) => {
          this.allContracts = resp
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  findAllBonus() {
    this.bonusService.findAllBonus()
      .subscribe({
        next: (resp) => {
          this.allBonus = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeAllBonus(newValue: BonusInterface[]) {
    this.allBonus = newValue
  }

  changeIdBonus(newValue:string){
    this.idBonus = newValue
    this.viewOneBonus = !this.viewOneBonus
    this.oneBonus()
    localStorage.setItem('viewOneBonus', JSON.stringify(this.viewOneBonus))
  }

  changeViewOneBonus(newValue:boolean){
    this.viewOneBonus = newValue
    localStorage.setItem('viewOneBonus', JSON.stringify(this.viewOneBonus))
  }

  oneBonus(){
    this.bonusService.oneBonus(this.idBonus)
    .subscribe({
      next:(resp)=>{
        this.bonus = resp
        localStorage.setItem('oneBonus', JSON.stringify(this.bonus))
      },
      error:(err)=>{
        console.log({err})
      }
    })
  }

}
