import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ManagementService } from '../../../services/management.service';
import { CreateManagementInterface } from '../../../interfaces/managements/create-management.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'user-form-create-management',
  templateUrl: './create-management.component.html',
  styleUrls: ['./create-management.component.css']
})
export class CreateManagementComponent {

  public createManagementForm: FormGroup = this.formBuilder.group({
    year: [0, [Validators.required, Validators.min(1900), this.yearValidator], []],
    start_date: ['', [Validators.required,], []],
    end_date: ['', [Validators.required], []]
  })
  constructor(
    private formBuilder: FormBuilder,
    private managementService: ManagementService,
    public dialog: MatDialog
  ) { }

  onCreateManagement() {
    const { year, start_date, end_date } = this.createManagementForm.value
    const formattedStartDate = this.formatDate(start_date);
    const formattedEndDate = this.formatDate(end_date);

    const createManagement:CreateManagementInterface ={
      year:+year,
      start_date:formattedStartDate,
      end_date:formattedEndDate
    }

    this.managementService.createManagement(createManagement)
    .subscribe({
      next:()=>{
        this.openDialogSucces()
      },
      error:(err)=>{
        console.log({err})
        this.openDialogError()
      }
    })

  }

  openDialogSucces() {
    this.dialog.open(DialogSuccess);
  }

  openDialogError() {
    this.dialog.open(DialogError);
  }

  yearValidator(control: AbstractControl): ValidationErrors | null {
    const year = control.value;
    if (isNaN(year)) {
      return { year: true };
    }
    return null;
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}

@Component({
  selector: 'dialog-success',
  templateUrl: 'dialog-success.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogSuccess {}

@Component({
  selector: 'dialog-error',
  templateUrl: 'dialog-error.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogError {}
