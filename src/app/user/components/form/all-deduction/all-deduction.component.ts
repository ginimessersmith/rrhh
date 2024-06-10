import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';

@Component({
  selector: 'user-form-all-deduction',
  templateUrl: './all-deduction.component.html',
  styleUrls: ['./all-deduction.component.css']
})
export class AllDeductionComponent {

  @Input() allDeductions!: DeductionInterface[]
  @Input() viewList!: boolean

  public idDeduction!:string
  @Output() idDeductionEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'amount',
    'description',
    'contract_start_date',
    'contract_end_date',
    'employee',
    'actions'
  ]

  constructor(){}

  sendIdDeduction(id:string){
    this.idDeduction = id
    this.emitIdDeduction()
  }

  emitIdDeduction(){
    this.idDeductionEmit.emit(this.idDeduction)
  }

}
