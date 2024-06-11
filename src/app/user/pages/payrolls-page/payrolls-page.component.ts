import { Component, OnDestroy, OnInit } from '@angular/core';
import { PayrollInterface } from '../../interfaces/payrolls/payroll.interface';
import { PayrollService } from '../../services/payroll.service';
import { PeriodsInterface } from '../../interfaces/periods/periods';
import { ManagementInterface } from '../../interfaces/managements/management.interface';
import { PeriodsService } from '../../services/periods.service';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-payrolls-page',
  templateUrl: './payrolls-page.component.html',
  styleUrls: ['./payrolls-page.component.css']
})
export class PayrollsPageComponent implements OnInit, OnDestroy {

  public allPayrolls!: PayrollInterface[]
  public allPeriods!: PeriodsInterface[]
  public allManagement!: ManagementInterface[]

  constructor(
    private payrollService: PayrollService,
    private periodsService: PeriodsService,
    private managementService: ManagementService,
  ) { }

  ngOnInit(): void {
    this.findAllPayrolls()
    this.findAllManagements()
    this.findAllPeriods()
  }

  ngOnDestroy(): void {
    this.allPayrolls = []
    this.allManagement = []
    this.allPeriods = []
  }

  findAllPayrolls() {
    this.payrollService.findAllPayrolls()
      .subscribe({
        next: (res) => {
          this.allPayrolls = res
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllManagements() {
    this.managementService.allManagement()
      .subscribe({
        next: (res) => {
          this.allManagement = res
        },
        error: (err) => {
          console.log({})
        }
      })
  }

  findAllPeriods() {
    this.periodsService.findAllPeriods()
      .subscribe({
        next: (res) => {
          this.allPeriods = res
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

}
