import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractInterface } from '../interfaces/deductions/contract.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { CreateSettlementInterface } from '../interfaces/settlements/create-settlement.interface';
import { SettlementInterface } from '../interfaces/settlements/settlement.interface';

@Injectable({
  providedIn: 'root'
})
export class SettlementsService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createSettlement(createSettlement: CreateSettlementInterface): Observable<boolean> {
    const url: string = `${this.baseUrl}/settlements`
    return this.http.post<boolean>(url, createSettlement)
  }

  findAllSettlements(): Observable<SettlementInterface[]> {
    const url: string = `${this.baseUrl}/settlements`
    return this.http.get<SettlementInterface[]>(url)
  }

  findOneSettlement(id: string): Observable<SettlementInterface> {
    const url: string = `${this.baseUrl}/settlements/${id}`
    return this.http.get<SettlementInterface>(url)
  }

  findAllContract(): Observable<ContractInterface[]> {
    const url: string = `${this.baseUrl}/contracts`
    return this.http.get<ContractInterface[]>(url)
  }
}
