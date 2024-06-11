import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BonusService } from '../../../services/bonus.service';
import { MatDialog } from '@angular/material/dialog';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { BonusInterface } from 'src/app/user/interfaces/bonus/bonus.interface';
import { CreateBonusInterface } from '../../../interfaces/bonus/createBonus.interface';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
  selector: 'user-form-create-bonus',
  templateUrl: './create-bonus.component.html',
  styleUrls: ['./create-bonus.component.css']
})
export class CreateBonusComponent {

  public Dialog = new DialogComponent(this.dialog)
  public allBonus!: BonusInterface[]

  @Input() allContracts!: ContractInterface[]
  @Output() allBonusEmit = new EventEmitter<BonusInterface[]>()

  public createBonusForm: FormGroup = this.formBuilder.group({
    contractId: ['', [Validators.required, Validators.minLength(3)], []],
    amount: [0, [Validators.required], []],
    description: ['', [Validators.required, Validators.minLength(3)], []],
    date: ['', [Validators.required, Validators.minLength(3)], []],
  })

  constructor(
    private formBuilder: FormBuilder,
    private bonusService: BonusService,
    private dialog: MatDialog
  ) { }

  onCreateBonus() {
    const { date, ...resData } = this.createBonusForm.value
    const formatDate = this.formatDate(date)

    const createBonus: CreateBonusInterface = {
      ...resData,
      date
    }

    this.bonusService.createBonus(createBonus)
    .subscribe({
      next:()=>{
        this.findAllBonus()
        this.Dialog.openDialogSucces()

      },
      error:(err)=>{
        this.Dialog.openDialogError()
        console.log({err})
      }
    })
  }

  findAllBonus() {
    this.bonusService.findAllBonus()
      .subscribe({
        next: (resp) => {
          this.allBonus = resp
          this.emitAllBonus()
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  emitAllBonus() {
    this.allBonusEmit.emit(this.allBonus)
  }
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


}
