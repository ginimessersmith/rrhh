import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CreateContractTypesInterface } from '../interfaces/contract-types/create-contract-types.interface';
import { ContractTypesInterface } from '../interfaces/contract-types/contract-types.interface';

@Injectable({
  providedIn: 'root'
})
export class ContractTypesService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createContractType(createContractTypeInterface: CreateContractTypesInterface): Observable<boolean>{
    const url = `${this.baseUrl}/contract-types`;
    return this.http.post<boolean>(url, createContractTypeInterface);
  }

  getAllContractTypes():Observable<ContractTypesInterface[]>{
    const url = `${this.baseUrl}/contract-types`;
    return this.http.get<ContractTypesInterface[]>(url);
  }
}
