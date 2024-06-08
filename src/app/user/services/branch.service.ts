import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CreateBranchInterface } from '../interfaces/branches/create-branch.interface';
import { BranchResponseInterface } from '../interfaces/branches/branch.interface';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient,
  ) { }

  createBranch(createBranchInterface: CreateBranchInterface): Observable<boolean> {
    const url = `${this.baseUrl}/branches`
    return this.http.post<boolean>(url, createBranchInterface)
  }

  allBranch():Observable<BranchResponseInterface[]>{
    const url = `${this.baseUrl}/branches`
    return this.http.get<BranchResponseInterface[]>(url)
  }

  oneBranch(id:string):Observable<BranchResponseInterface>{
    const url = `${this.baseUrl}/branches/${id}`
    return this.http.get<BranchResponseInterface>(url)
  }
}
