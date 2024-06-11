import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContractInterface } from 'src/app/user/interfaces/deductions/contract.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettlementsService } from '../../../services/settlements.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { CreateSettlementInterface } from '../../../interfaces/settlements/create-settlement.interface';

const options = [
  {
    option: 'Si',
    value: true
  }, {
    option: 'No',
    value: false
  }
]

@Component({
  selector: 'user-form-create-settlement',
  templateUrl: './create-settlement.component.html',
  styleUrls: ['./create-settlement.component.css']
})
export class CreateSettlementComponent implements OnInit {

  @Input() allContracts!: ContractInterface[]
  public Dialog = new DialogComponent(this.dialog)
  public options = options
  public disabledVoluntary = false
  public disabledForced = false
  public disabledTermination= false

  public createSettlementForm: FormGroup = this.formBuilder.group({
    contractId: ['', [Validators.required, Validators.minLength(3)], []],
    isVoluntary: [false, [Validators.required, Validators.minLength(1)], []],
    isForced: [false, [Validators.required, Validators.minLength(1)], []],
    isTermination: [false, [Validators.required, Validators.minLength(1)], []],
    christmasBonus: [0, Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder,
    private settlementsService: SettlementsService,
    private dialog: MatDialog,
  ) { }
  ngOnInit(): void {

  }

  onCreateSettlements() {
    const createSettlement: CreateSettlementInterface = {
      ...this.createSettlementForm.value
    }
    this.settlementsService.createSettlement(createSettlement)
    .subscribe({
      next:()=>{
        this.Dialog.openDialogSucces()
      },
      error:(err)=>{
        this.Dialog.openDialogError()
        console.log({err})
      }
    })
  }

  changeVoluntaryCheck(){
    this.disabledForced = !this.disabledForced
    this.disabledTermination = !this.disabledTermination
  }

  changeForcedCheck(){
    this.disabledVoluntary = !this.disabledVoluntary
    this.disabledTermination = !this.disabledTermination
  }

  changeTerminationCheck(){
    this.disabledForced = !this.disabledForced
    this.disabledVoluntary = !this.disabledVoluntary
  }


}


