import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BonusInterface } from 'src/app/user/interfaces/bonus/bonus.interface';
import { BonusService } from '../../../services/bonus.service';
import { formatDate } from 'src/app/user/utils/functions.utils';
import { BonusByDateInterface } from 'src/app/user/interfaces/bonus/bonus-by-date.interface';

@Component({
  selector: 'user-form-all-bonus-between-date',
  templateUrl: './all-bonus-between-date.component.html',
  styleUrls: ['./all-bonus-between-date.component.css']
})
export class AllBonusBetweenDateComponent {

  public allBonusByDate!: BonusInterface[]
  public idBonus!:string
  @Output() idBonusEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'amount',
    'description',
    'contract_start_date',
    'contract_end_date',
    'employee',
    'position',
    'department',
    'branch',
    'contract_type'
  ]

  public allBonusForm: FormGroup = this.formBuilder.group({
    start: ['', [Validators.required, Validators.minLength(3)], []],
    end: ['', [Validators.required, Validators.minLength(3)], []],
  })

  constructor(
    private formBuilder: FormBuilder,
    private bonusService: BonusService,
  ) { }

  onBonusByDate() {
    const { start, end } = this.allBonusForm.value
    const formatStart = formatDate(start)
    const formatEnd = formatDate(end)
    const bonusByDate: BonusByDateInterface = {
      start: formatStart,
      end: formatEnd
    }
    this.bonusService.findAllBonusBetweenDates(bonusByDate)
      .subscribe({
        next: (resp) => {
          this.allBonusByDate = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  sendIdBonus(id:string){
    this.idBonus = id
    this.emitIdBonus()
  }

  emitIdBonus(){
    this.idBonusEmit.emit(this.idBonus)
  }

}
