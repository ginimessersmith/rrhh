import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ApplicantsInterface } from '../interfaces/applicants/applicants.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createApplicant(applicantInterface: ApplicantsInterface): Observable<boolean>{
    const url = `${this.baseUrl}/applicants`;
    return this.http.post<boolean>(url, applicantInterface);
  }

  getAllApplicants():Observable<ApplicantsInterface[]>{
    const url = `${this.baseUrl}/applicants`;
    return this.http.get<ApplicantsInterface[]>(url);
  }

  oneApplicant(id: string): Observable<ApplicantsInterface> {
    const url: string = `${this.baseUrl}/applicants/${id}`
    console.log('id from service',id)
    return this.http.get<ApplicantsInterface>(url,)
  }
}
