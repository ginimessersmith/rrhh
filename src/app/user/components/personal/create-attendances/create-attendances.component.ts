import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendancesInterface } from 'src/app/user/interfaces/attendances/attendances.interface';
import { AttendancesService } from 'src/app/user/services/attendances.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeResponseInterface } from 'src/app/user/interfaces/employees/employee.interface';

@Component({
  selector: 'user-personal-create-attendances',
  templateUrl: './create-attendances.component.html',
  styleUrls: ['./create-attendances.component.css']
})
export class CreateAttendancesComponent {

  public Dialog = new DialogComponent(this.dialog);
  @Input() allEmployees!: EmployeeResponseInterface[];
  @Input() allAttendances!: AttendancesInterface[];
  @Output() allAttendancesEmit = new EventEmitter<AttendancesInterface[]>();

  public createAttendanceForm: FormGroup = this.formBuilder.group({
    employeeId: ['', Validators.required],
    date: ['', Validators.required],
    status: [false],
    observation: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private attendancesService: AttendancesService,
    private dialog: MatDialog
  ) { }

  onCreateAttendance() {
    if (this.createAttendanceForm.invalid) {
      return;
    }

    const formData = this.createAttendanceForm.value;
    const createAttendance: AttendancesInterface = {
      ...formData,
      date: this.formatDate(formData.date)
    };

    this.attendancesService.createAttendances(createAttendance).subscribe({
      next: () => {
        this.findAllAttendances();
        this.Dialog.openDialogSucces();
      },
      error: (err) => {
        this.Dialog.openDialogError();
        console.error(err);
      }
    });
  }

  findAllAttendances() {
    this.attendancesService.getAllAttendances().subscribe({
      next: (resp) => {
        this.allAttendances = resp;
        this.emitAttendances();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  emitAttendances() {
    this.allAttendancesEmit.emit(this.allAttendances);
  }

  private formatDate(date: any): string {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
