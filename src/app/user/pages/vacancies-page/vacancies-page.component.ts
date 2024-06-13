import { Component, OnInit } from '@angular/core';
import { VacanciesInterface } from '../../interfaces/vacancies/vacancies.interface';
import { VacanciesService } from '../../services/vacancies.service';
import { PositionInterface } from '../../interfaces/positions/Position.interface';
import { PositionService } from '../../services/position.service';
import { RequestInterface } from '../../interfaces/app/request.interface';
import { BackIAService } from '../../services/back-ia.service';

@Component({
  selector: 'app-vacancies-page',
  templateUrl: './vacancies-page.component.html',
  styleUrls: ['./vacancies-page.component.css']
})

export class VacanciesPageComponent implements OnInit {

  public viewList: boolean = true
  public viewOneVacancy: boolean = false
  public allPositions!: PositionInterface[]
  public allVacancies!: VacanciesInterface[]
  public vacancy!: VacanciesInterface
  public idVacancy!: string
  public allRequest!: RequestInterface[]

  constructor(
    private positionsService: PositionService,
    private vacanciesService: VacanciesService,
    private backIAService: BackIAService
  ) { }

  ngOnInit(): void {
    const viewListLocal = localStorage.getItem('viewListVacancies');
    const viewOneVacancyLocal = localStorage.getItem('viewOneVacancyLocal');
    if (viewOneVacancyLocal) this.viewOneVacancy = JSON.parse(viewOneVacancyLocal)
    if (viewListLocal) this.viewList = JSON.parse(viewListLocal)

    this.findAllPositions()
    this.findAllVacancies()
    this.findAllRequest()
  }

  findAllPositions() {
    this.positionsService.findAllPositions()
      .subscribe({
        next: (resp) => {
          this.allPositions = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllRequest() {
    this.backIAService.findAllRequest()
      .subscribe({
        next: (res) => {
          this.allRequest = res
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  findAllVacancies() {
    this.vacanciesService.getAllVacancies()
      .subscribe({
        next: (resp) => {
          this.allVacancies = resp
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeSlideToggle() {
    this.viewList = !this.viewList
    localStorage.setItem('viewLIstContracts', JSON.stringify(this.viewList))
  }

  changeIdVacancy(id: string) {
    this.idVacancy = id
    this.viewOneVacancy = !this.viewOneVacancy
    this.oneVacancy()
    localStorage.setItem('viewOneVacancy', JSON.stringify(this.viewOneVacancy))
  }

  changeViewOneVacancy(newValue: boolean) {
    console.log({ newValue })
    this.viewOneVacancy = newValue
    localStorage.setItem('viewOneVacancy', JSON.stringify(this.viewOneVacancy))
  }

  oneVacancy() {
    this.vacanciesService.oneVacancy(this.idVacancy)
      .subscribe({
        next: (resp) => {
          this.vacancy = resp
          localStorage.setItem('oneVacancy', JSON.stringify(this.vacancy))
          console.log({ resp })
        },
        error: (err) => {
          console.log({ err })
        }
      })
  }

  changeAllVacancies(vacancies: VacanciesInterface[]) {
    this.allVacancies = vacancies
    console.log({ vacancies })
  }
}

