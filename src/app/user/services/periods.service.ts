import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreatePeriodsInterface } from '../interfaces/periods/create-periods';
import { Observable } from 'rxjs';
import { PeriodsInterface } from '../interfaces/periods/periods';

@Injectable({
  providedIn: 'root'
})
export class PeriodsService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createPeriod(createPeriodsInterface: CreatePeriodsInterface): Observable<boolean> {
    const url: string = `${this.baseUrl}/periods`
    return this.http.post<boolean>(url, createPeriodsInterface)
  }

  findAllPeriods(): Observable<PeriodsInterface[]> {
    const url: string = `${this.baseUrl}/periods`
    return this.http.get<PeriodsInterface[]>(url)
  }
}
