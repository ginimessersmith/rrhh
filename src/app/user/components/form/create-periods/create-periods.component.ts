import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodsService } from '../../../services/periods.service';
import { listMonts } from 'src/app/user/utils';
import { PeriodsInterface } from 'src/app/user/interfaces/periods/periods';
import { CreatePeriodsInterface } from '../../../interfaces/periods/create-periods';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'user-form-create-periods',
  templateUrl: './create-periods.component.html',
  styleUrls: ['./create-periods.component.css']
})
export class CreatePeriodsComponent {

  public listMonts: string[] = listMonts
  public Dialog = new DialogComponent(this.dialog)

  public allPeriods!: PeriodsInterface[]
  @Output() allPeriodsEmit = new EventEmitter<PeriodsInterface[]>()

  public createPeriodsForm: FormGroup = this.formBuilder.group({
    month: ['', [Validators.required, Validators.minLength(3)], []],
    start_date: ['', [Validators.required, Validators.minLength(3)], []],
    end_date: ['', [Validators.required, Validators.minLength(3)], []],

  })
  constructor(
    private formBuilder: FormBuilder,
    private periodsService: PeriodsService,
    public dialog: MatDialog
  ) { }

  onCreatePeriod() {
    const { month, start_date, end_date } = this.createPeriodsForm.value
    const formatDateStart = this.formatDate(start_date)
    const formatDateEnd = this.formatDate(end_date)
    const createPeriods:CreatePeriodsInterface ={
      month,
      start_date:formatDateStart,
      end_date:formatDateEnd,
    }
    this.periodsService.createPeriod(createPeriods)
    .subscribe({
      next:()=>{
        this.allPeriod()
        this.Dialog.openDialogSucces()
      },
      error:(err)=>{
        this.Dialog.openDialogError()
        console.log({err})
      }
    })

  }

  allPeriod() {
    this.periodsService.findAllPeriods()
      .subscribe({
        next: (resp) => {
          this.allPeriods = resp
          this.emitPeriods()
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  emitPeriods() {
    this.allPeriodsEmit.emit(this.allPeriods)
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}



