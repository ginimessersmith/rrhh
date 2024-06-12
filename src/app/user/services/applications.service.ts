import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ApplicationsInterface } from '../interfaces/applications/applications.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createApplication(applicationInterface: ApplicationsInterface): Observable<boolean>{
    const url = `${this.baseUrl}/applications`;
    return this.http.post<boolean>(url, applicationInterface);
  }

  getAllApplications():Observable<ApplicationsInterface[]>{
    const url = `${this.baseUrl}/applications`;
    return this.http.get<ApplicationsInterface[]>(url);
  }

  oneApplication(id: string): Observable<ApplicationsInterface> {
    const url: string = `${this.baseUrl}/applications/${id}`
    console.log('id from service',id)
    return this.http.get<ApplicationsInterface>(url)
  }

  disableApplication(id: string): Observable<ApplicationsInterface> {
    const url: string = `${this.baseUrl}/applications/disableApplication/${id}`
    console.log('id from service', id);
    return this.http.put<ApplicationsInterface>(url, {});
  }

  convertToEmployee(id: string): Observable<ApplicationsInterface> {
    const url: string = `${this.baseUrl}/applications/convertToEmployee/${id}`
    console.log('id from service', id);
    return this.http.put<ApplicationsInterface>(url, {});
  }
}
