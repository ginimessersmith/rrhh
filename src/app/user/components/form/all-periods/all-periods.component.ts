import { Component, Input } from '@angular/core';
import { PeriodsInterface } from 'src/app/user/interfaces/periods/periods';

@Component({
  selector: 'user-form-all-periods',
  templateUrl: './all-periods.component.html',
  styleUrls: ['./all-periods.component.css']
})
export class AllPeriodsComponent {
  @Input() viewList!:boolean
  @Input() allPeriods!:PeriodsInterface[]
  displayColumns:string[]=['month','start_date','end_date']
}
