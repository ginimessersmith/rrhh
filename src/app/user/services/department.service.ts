import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { CreateDepartmentInterface } from '../interfaces/departments/createDepartmentRequest.interface';
import { DepartmentInterface } from '../interfaces/departments/department.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public baseUrl:string = environment.baseUrl

  constructor(
    private http:HttpClient,
  ) { }

  createDepartment(CreateDepartmentInterface:CreateDepartmentInterface):Observable<boolean>{
    const url = `${this.baseUrl}/departments`
    return this.http.post<boolean>(url,CreateDepartmentInterface)
  }

  allDepartments():Observable<DepartmentInterface[]>{
    const url = `${this.baseUrl}/departments`
    return this.http.get<DepartmentInterface[]>(url)
  }

  oneDepartments(id:string):Observable<DepartmentInterface>{
    const url = `${this.baseUrl}/departments/${id}`
    return this.http.get<DepartmentInterface>(url)
  }

}
