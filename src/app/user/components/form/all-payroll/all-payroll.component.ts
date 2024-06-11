import { Component, Input } from '@angular/core';
import { PayrollInterface } from 'src/app/user/interfaces/payrolls/payroll.interface';

@Component({
  selector: 'user-form-all-payroll',
  templateUrl: './all-payroll.component.html',
  styleUrls: ['./all-payroll.component.css']
})
export class AllPayrollComponent {

  @Input() allPayrolls!: PayrollInterface[]

  public displayColumns: string[] = [

    'names',
    'address',
    'cellphone',
    'cashPayable',
    'totalBonuses',
    'totalDeductions',
    'baseSalary',
    'position',
    'contractType',
    'period',
    'management_year',

  ]


}
