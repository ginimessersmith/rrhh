import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantsInterface } from 'src/app/user/interfaces/applicants/applicants.interface';
import { ApplicantsService } from 'src/app/user/services/applicants.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfessionResponseInterface } from 'src/app/user/interfaces/professions/professions.interface';

@Component({
  selector: 'user-vacancies-create-applicants',
  templateUrl: './create-applicants.component.html',
  styleUrls: ['./create-applicants.component.css']
})
export class CreateApplicantsComponent {

  public Dialog = new DialogComponent(this.dialog);
  @Input() allProfessions!: ProfessionResponseInterface[];
  @Input() allApplicants!: ApplicantsInterface[];
  @Output() allApplicantsEmit = new EventEmitter<ApplicantsInterface[]>();

  public createApplicantForm: FormGroup = this.formBuilder.group({
    names: ['', [Validators.required, Validators.minLength(2)], []],
    last_names: ['', [Validators.required, Validators.minLength(2)], []],
    genre: ['', [Validators.required],[]],
    ci: ['', [Validators.required, Validators.minLength(7)], []],
    cellphone: ['', [Validators.required, Validators.minLength(8)], []],
    address: ['', [Validators.required, Validators.minLength(5)],[]],
    birthdate: ['', [Validators.required], []],
    curriculum: [null, [Validators.required]],
    professionId: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private applicantsService: ApplicantsService,
    private dialog: MatDialog
  ) { }

  onCreateApplicant() {
    if (this.createApplicantForm.invalid) {
      return;
    }

    const formData = this.createApplicantForm.value;
    const createApplicant: ApplicantsInterface = {
      ...formData,
      birthdate: this.formatDate(formData.birthdate)
    };

    this.applicantsService.createApplicant(createApplicant).subscribe({
      next: () => {
        this.findAllApplicants();
        this.Dialog.openDialogSucces();
      },
      error: (err) => {
        this.Dialog.openDialogError();
        console.error(err);
      }
    });
  }

  findAllApplicants() {
    this.applicantsService.getAllApplicants().subscribe({
      next: (resp) => {
        this.allApplicants = resp;
        this.emitApplicants();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  emitApplicants() {
    this.allApplicantsEmit.emit(this.allApplicants);
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
