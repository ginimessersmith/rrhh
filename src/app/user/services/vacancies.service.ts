import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { VacanciesInterface } from '../interfaces/vacancies/vacancies.interface';

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createVacancy(createVacancy: VacanciesInterface): Observable<boolean> {
    const url: string = `${this.baseUrl}/vacancies`
    return this.http.post<boolean>(url, createVacancy)
  }

  getAllVacancies(): Observable<VacanciesInterface[]> {
    const url: string = `${this.baseUrl}/vacancies`
    return this.http.get<VacanciesInterface[]>(url)
  }

  oneVacancy(id: string): Observable<VacanciesInterface> {
    const url: string = `${this.baseUrl}/vacancies/${id}`
    return this.http.get<VacanciesInterface>(url)
  }

}
