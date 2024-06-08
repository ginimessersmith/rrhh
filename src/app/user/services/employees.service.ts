import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/auth/interfaces';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  getEmployeeById(id: String): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }
}
