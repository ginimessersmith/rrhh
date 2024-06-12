import { Component, OnInit } from '@angular/core';
import { ApplicationsInterface } from '../../interfaces/applications/applications.interface';
import { ApplicationsService } from '../../services/applications.service';
import { ApplicantsInterface } from '../../interfaces/applicants/applicants.interface';
import { ApplicantsService } from '../../services/applicants.service';
import { VacanciesInterface } from '../../interfaces/vacancies/vacancies.interface';
import { VacanciesService } from '../../services/vacancies.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css']
})
export class ApplicationsPageComponent implements OnInit {

  public allApplicants!: ApplicantsInterface[];
  public allVacancies!: VacanciesInterface[];
  public allApplications!: ApplicationsInterface[];
  public application!: ApplicationsInterface;
  public idApplication!: string;

  displayedColumns: string[] = ['title', 'position', 'names', 'cellphone', 'curriculum', 'status','options'];
  dataSource = new MatTableDataSource<ApplicationsInterface>();

  constructor(
    private vacanciesService: VacanciesService,
    private applicantsService: ApplicantsService,
    private applicationsService: ApplicationsService
  ) {}

  ngOnInit(): void {
    this.findAllApplicants();
    this.findAllVacancies();
    this.getAllApplications();
  }

  getAllApplications() {
    this.applicationsService.getAllApplications()
      .subscribe({
        next: (resp) => {
          this.allApplications = resp;
          this.dataSource.data = this.allApplications;
        },
        error: (err) => {
          console.log({ err });
        }
      });
  }

  findAllApplicants() {
    this.applicantsService.getAllApplicants()
      .subscribe({
        next: (resp) => {
          this.allApplicants = resp;
        },
        error: (err) => {
          console.log({ err });
        }
      });
  }

  findAllVacancies() {
    this.vacanciesService.getAllVacancies()
      .subscribe({
        next: (resp) => {
          this.allVacancies = resp;
        },
        error: (err) => {
          console.log({ err });
        }
      });
  }

  disableApplication(id: string) {
    this.applicationsService.disableApplication(id).subscribe({
      next: (response: ApplicationsInterface) => {
        console.log('Application disabled successfully', response);
        Swal.fire('', 'Postulacion Deshabilitada', 'success');
        this.getAllApplications();
      },
      error: (error) => {
        console.error('Error disabling application', error);
        Swal.fire('', 'Ocurrió un error al deshabilitar la postulacion', 'error');
      }
    });
  }

  convertToEmployee(id: string) {
    this.applicationsService.convertToEmployee(id).subscribe({
      next: (response: ApplicationsInterface) => {
        console.log('Postulante contratado', response);
        Swal.fire('', 'Postulante Contratado', 'success');
        this.getAllApplications();
      },
      error: (error) => {
        console.error('Error converting to employee', error);
        Swal.fire('', 'Ocurrió un error al contratar al postulante', 'error');
      }
    });
  }

  downloadFile(url: string) {
    window.open(url, '_blank');
  }
}
