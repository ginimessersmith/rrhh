import { Component, Input } from '@angular/core';
import { ManagementInterface } from 'src/app/user/interfaces/managements/management.interface';

@Component({
  selector: 'user-form-all-management',
  templateUrl: './all-management.component.html',
  styleUrls: ['./all-management.component.css']
})
export class AllManagementComponent {

  @Input() allManagement!:ManagementInterface[]
  @Input() isList!:boolean
  displayColumn:string[]=['year','start_date','end_date']

}
