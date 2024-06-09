import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DepartmentBranch, PositionInterface } from 'src/app/user/interfaces/positions/Position.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PositionService } from '../../../services/position.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreatePositionInterface } from '../../../interfaces/positions/createPosition.interface';

@Component({
  selector: 'user-enterprise-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent {

  @Input() allDepartmetBranch!: DepartmentBranch[]
  public allPositions!: PositionInterface[]
  @Output() allPositionsEmit = new EventEmitter<PositionInterface[]>()

  public createPositionForm: FormGroup = this.formBuilder.group({
    position: ['', [Validators.required, Validators.minLength(2),], []],
    departmentBranchId: ['', [Validators.required], []]
  })


  constructor(
    private formBuilder: FormBuilder,
    private positionService: PositionService,
    public dialog: MatDialog
  ) { }

  onCreatePosition() {
    const createPositionInterface: CreatePositionInterface = {
      ...this.createPositionForm.value
    }
    this.positionService.createPosition(createPositionInterface)
      .subscribe({
        next: () => {
          this.findAllPositions()
          this.openDialogSucces()
        },
        error: (err) => {
          this.openDialogError()
          console.log({ err })
        },
      })
  }


  openDialogError() {
    this.dialog.open(DialogError);
  }

  openDialogSucces() {
    this.dialog.open(DialogSucces);
  }

  findAllPositions() {
    this.positionService.findAllPositions()
      .subscribe({
        next: (resp) => {
          this.allPositions = resp
          this.emitAllPosition()
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  emitAllPosition() {
    this.allPositionsEmit.emit(this.allPositions)
  }

}

@Component({
  selector: 'dialog-error',
  templateUrl: './dialog-error.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogError { }


@Component({
  selector: 'dialog-succes',
  templateUrl: './dialog-succes.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogSucces { }
