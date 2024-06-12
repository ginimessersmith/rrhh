import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VacanciesInterface } from 'src/app/user/interfaces/vacancies/vacancies.interface';

@Component({
  selector: 'user-vacancies-all-vacancies',
  templateUrl: './all-vacancies.component.html',
  styleUrls: ['./all-vacancies.component.css']
})
export class AllVacanciesComponent {

  @Input() allVacancies!: VacanciesInterface[]
  @Input() viewList!: boolean

  public idVacancy!:string
  @Output() idVacancyEmit = new EventEmitter<string>()

  public displayColumns: string[] = [
    'position',
    'title',
    'start_date',
    'end_date'
  ]

  constructor(){}

  sendIdVacancy(id:string){
    this.idVacancy = id
    this.emitIdVacancy()
  }

  emitIdVacancy(){
    this.idVacancyEmit.emit(this.idVacancy)
  }

}
