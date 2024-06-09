import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

import { CreateManagementInterface } from '../interfaces/managements/create-management.interface';
import { Observable } from 'rxjs';
import { ManagementInterface } from '../interfaces/managements/management.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  createManagement(createManagement: CreateManagementInterface): Observable<boolean> {
    const url = `${this.baseUrl}/managements`
    return this.http.post<boolean>(url, createManagement)
  }

  allManagement(): Observable<ManagementInterface[]> {
    const url = `${this.baseUrl}/managements`
    return this.http.get<ManagementInterface[]>(url)
  }
}
