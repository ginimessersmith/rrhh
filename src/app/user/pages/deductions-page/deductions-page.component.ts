import { Component, OnInit } from '@angular/core';
import { DeductionInterface } from '../../interfaces/deductions/deduction.interface';
import { DeductionsService } from '../../services/deductions.service';
import { FormBuilder } from '@angular/forms';
import { ContractInterface } from '../../interfaces/deductions/contract.interface';

@Component({
  selector: 'app-deductions-page',
  templateUrl: './deductions-page.component.html',
  styleUrls: ['./deductions-page.component.css']
})
export class DeductionsPageComponent implements OnInit {

  public viewList: boolean = true
  public viewOneDeduction: boolean = false
  public allDeduction!: DeductionInterface[]
  public allContract!: ContractInterface[]
  public idDeduction!: string
  public deduction!: DeductionInterface

  constructor(
    private deductionsService: DeductionsService,
  ) { }

  ngOnInit(): void {

    const viewListLocal = localStorage.getItem('viewListDeductions')
    const viewOneDeductionLocal = localStorage.getItem('viewOneDeduction')
    if (viewOneDeductionLocal) this.viewOneDeduction = JSON.parse(viewOneDeductionLocal)
    if (viewListLocal) this.viewList = JSON.parse(viewListLocal)

    this.findAllContract()
    this.findAllDeductions()
  }

  findAllDeductions() {
    this.deductionsService.findAllDeduction()
      .subscribe({
        next: (resp) => {
          this.allDeduction = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllContract() {
    this.deductionsService.findAllContract()
      .subscribe({
        next: (resp) => {
          this.allContract = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeSlideToggle() {
    this.viewList = !this.viewList
    localStorage.setItem('viewListDeductions', JSON.stringify(this.viewList))
  }

  changeIdDeduction(id: string) {
    this.idDeduction = id
    this.viewOneDeduction = !this.viewOneDeduction
    this.oneDeduction()
    localStorage.setItem('viewOneDeduction', JSON.stringify(this.viewOneDeduction))
  }

  changeViewOneDeduction(newValue: boolean) {
    console.log({ newValue })
    this.viewOneDeduction = newValue
    localStorage.setItem('viewOneDeduction', JSON.stringify(this.viewOneDeduction))
  }

  oneDeduction() {
    this.deductionsService.oneDeduction(this.idDeduction)
      .subscribe({
        next: (resp) => {
          this.deduction = resp
          localStorage.setItem('oneDeduction', JSON.stringify(this.deduction))
          console.log({ resp })
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeAllDeductions(deductions: DeductionInterface[]) {
    this.allDeduction = deductions
    console.log({ deductions })
  }


}
