import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VacanciesInterface } from 'src/app/user/interfaces/vacancies/vacancies.interface';
import { VacanciesService } from 'src/app/user/services/vacancies.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PositionInterface } from 'src/app/user/interfaces/positions/Position.interface';

@Component({
  selector: 'user-vacancies-create-vacancies',
  templateUrl: './create-vacancies.component.html',
  styleUrls: ['./create-vacancies.component.css']
})
export class CreateVacanciesComponent {

  public Dialog = new DialogComponent(this.dialog);
  @Input() allPositions!: PositionInterface[];
  @Input() allVacancies!: VacanciesInterface[];
  @Output() allVacanciesEmit = new EventEmitter<VacanciesInterface[]>();

  public createVacancyForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)], []],
    description: ['', [Validators.required, Validators.minLength(10)], []],
    positionId: [ Validators.required],
    start_date: ['', Validators.required],
    end_date: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private vacanciesService: VacanciesService,
    private dialog: MatDialog
  ) { }

  onCreateVacancy() {
    if (this.createVacancyForm.invalid) {
      return;
    }

    const formData = this.createVacancyForm.value;
    const createVacancy: VacanciesInterface = {
      ...formData,
      start_date: this.formatDate(formData.start_date),
      end_date: this.formatDate(formData.end_date)
    };

    this.vacanciesService.createVacancy(createVacancy).subscribe({
      next: () => {
        this.findAllVacancies();
        this.Dialog.openDialogSucces();
      },
      error: (err) => {
        this.Dialog.openDialogError();
        console.error(err);
      }
    });
  }

  findAllVacancies() {
    this.vacanciesService.getAllVacancies().subscribe({
      next: (resp) => {
        this.allVacancies = resp;
        this.emitVacancies();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  emitVacancies() {
    this.allVacanciesEmit.emit(this.allVacancies);
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
