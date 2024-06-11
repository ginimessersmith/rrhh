import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreatePayrollInterface } from '../interfaces/payrolls/create-payroll.interface';
import { Observable } from 'rxjs';
import { PayrollInterface } from '../interfaces/payrolls/payroll.interface';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {

  public baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createPayroll(createPayroll: CreatePayrollInterface): Observable<string> {
    const url: string = `${this.baseUrl}/payrolls/generate`
    const params = new HttpParams()
      .set('periodId', createPayroll.periodId)
      .set('managementId', createPayroll.managementId)
    return this.http.post(url, null, { params, responseType: 'text' })
  }

  findAllPayrolls(): Observable<PayrollInterface[]> {
    const url: string = `${this.baseUrl}/payrolls`
    return this.http.get<PayrollInterface[]>(url)
  }

}
