import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreateDeductionInterface } from '../interfaces/deductions/create-deduction.interface';
import { DeductionByDateInterface } from '../interfaces/deductions/deductions-by-date.interface';
import { Observable } from 'rxjs';
import { DeductionInterface } from '../interfaces/deductions/deduction.interface';
import { ContractInterface } from '../interfaces/deductions/contract.interface';

@Injectable({
  providedIn: 'root'
})
export class DeductionsService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  createDeduction(createDeduction: CreateDeductionInterface): Observable<boolean> {
    const url: string = `${this.baseUrl}/deductions`
    return this.http.post<boolean>(url, createDeduction)
  }

  findAllDeduction(): Observable<DeductionInterface[]> {
    const url: string = `${this.baseUrl}/deductions`
    return this.http.get<DeductionInterface[]>(url,)
  }

  findAllDeductionRangeDate(deductionByDate: DeductionByDateInterface) {
    const url: string = `${this.baseUrl}/deductions/between-dates`
    const params = new HttpParams()
      .set('start', deductionByDate.start)
      .set('end', deductionByDate.end);
    return this.http.get<DeductionInterface[]>(url, { params })
  }

  findAllDeductionByContract(id: string):Observable<DeductionInterface[]> {
    const url: string = `${this.baseUrl}/deductions/by-contract/${id}`
    return this.http.get<DeductionInterface[]>(url,)
  }

  findAllContract(): Observable<ContractInterface[]> {
    const url: string = `${this.baseUrl}/contracts`
    return this.http.get<ContractInterface[]>(url)
  }

  oneDeduction(id: string): Observable<DeductionInterface> {
    const url: string = `${this.baseUrl}/deductions/${id}`
    console.log('id from service',id)
    return this.http.get<DeductionInterface>(url,)
  }

}
