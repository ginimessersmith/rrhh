import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { ContractInterface } from '../interfaces/deductions/contract.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractsService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createContract(contractInterface: ContractInterface): Observable<boolean>{
    const url = `${this.baseUrl}/contracts`;
    return this.http.post<boolean>(url, contractInterface);
  }

  getAllContracts():Observable<ContractInterface[]>{
    const url = `${this.baseUrl}/contracts`;
    return this.http.get<ContractInterface[]>(url);
  }

  oneContract(id: string): Observable<ContractInterface> {
    const url: string = `${this.baseUrl}/contracts/${id}`
    console.log('id from service',id)
    return this.http.get<ContractInterface>(url,)
  }
}
