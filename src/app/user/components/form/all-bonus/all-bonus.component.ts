import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BonusInterface } from 'src/app/user/interfaces/bonus/bonus.interface';

@Component({
  selector: 'user-form-all-bonus',
  templateUrl: './all-bonus.component.html',
  styleUrls: ['./all-bonus.component.css']
})
export class AllBonusComponent {
  @Input() allBonus!:BonusInterface[]
  @Input() viewList!: boolean

  public idBonus!:string
  @Output() idBonusEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'amount',
    'description',
    'contract_start_date',
    'contract_end_date',
    'employee',
    'actions'
  ]

  constructor(){}

  sendIdBonus(id:string){
    this.idBonus = id
    this.emitIdBonus()
  }

  emitIdBonus(){
    this.idBonusEmit.emit(this.idBonus)
  }


}
