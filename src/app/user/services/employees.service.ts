import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/auth/interfaces';
import { environment } from 'src/environment/environment';
import { CreateEmployeeInterface } from '../interfaces/employees/create-employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  getAllEmployees(): Observable<Employee[]>{
    const url = `${this.baseUrl}/employees`
    return this.http.get<Employee[]>(url);
  }

  getEmployeeById(id: String): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }

  createEmployee(createEmployeeInterface: CreateEmployeeInterface): Observable<boolean>{
    const url = `${this.baseUrl}/employees`;
    return this.http.post<boolean>(url, createEmployeeInterface);
  }
}
