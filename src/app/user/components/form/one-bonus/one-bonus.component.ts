import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BonusInterface } from 'src/app/user/interfaces/bonus/bonus.interface';
import { DeductionInterface } from 'src/app/user/interfaces/deductions/deduction.interface';

@Component({
  selector: 'user-form-one-bonus',
  templateUrl: './one-bonus.component.html',
  styleUrls: ['./one-bonus.component.css']
})
export class OneBonusComponent {
  @Input() idBonus!: string
  @Output() viewOneBonusEmit = new EventEmitter<boolean>()

  @Input() bonus!: BonusInterface
  public viewOneBonus: boolean = false

  ngOnInit(): void {
    const oneBonusLocal = localStorage.getItem('oneBonus')
    if(oneBonusLocal) this.bonus = JSON.parse(oneBonusLocal)
  }

  emitValue() {
    this.viewOneBonusEmit.emit(this.viewOneBonus)
  }

}
