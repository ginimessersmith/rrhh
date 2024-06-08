import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreateDepartmentBranchInterface } from '../interfaces/departments-branches/create-departmet-branch.interface';
import { Observable } from 'rxjs';
import { DepartmentBranchInterface } from '../interfaces/departments-branches/department-branch.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentBranchService {

  private baseUrl:string = environment.baseUrl

  constructor(
    private http:HttpClient,
  ) { }

  createDepartmentBranch(createDepartmentBranchInterface:CreateDepartmentBranchInterface):Observable<boolean>{
    const url = `${this.baseUrl}/departments-branches`
    return this.http.post<boolean>(url,createDepartmentBranchInterface)
  }

  allDepartmentsBranches():Observable<DepartmentBranchInterface[]>{
    const url = `${this.baseUrl}/departments-branches`
    return this.http.get<DepartmentBranchInterface[]>(url)
  }
  
}
