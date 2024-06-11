import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateBonusInterface } from '../interfaces/bonus/createBonus.interface';
import { BonusInterface } from '../interfaces/bonus/bonus.interface';
import { BonusByDateInterface } from '../interfaces/bonus/bonus-by-date.interface';
import { ContractInterface } from '../interfaces/deductions/contract.interface';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createBonus(createBonus: CreateBonusInterface): Observable<boolean> {
    const url: string = `${this.baseUrl}/bonuses`
    return this.http.post<boolean>(url, createBonus)
  }

  oneBonus(id: string): Observable<BonusInterface> {
    const url: string = `${this.baseUrl}/bonuses/${id}`
    return this.http.get<BonusInterface>(url)
  }

  findAllBonus(): Observable<BonusInterface[]> {
    const url: string = `${this.baseUrl}/bonuses`
    return this.http.get<BonusInterface[]>(url)
  }

  findAllBonusBetweenDates(bonusByDate: BonusByDateInterface): Observable<BonusInterface[]> {
    const url: string = `${this.baseUrl}/bonuses/between-dates`
    const params = new HttpParams()
      .set('start', bonusByDate.start)
      .set('end', bonusByDate.end)
    return this.http.get<BonusInterface[]>(url, { params })
  }

  findAllBonusByContract(idContract:string): Observable<BonusInterface[]>{
    const url: string = `${this.baseUrl}/bonuses/by-contract/${idContract}`
    return this.http.get<BonusInterface[]>(url)
  }

  findAllContract(): Observable<ContractInterface[]> {
    const url: string = `${this.baseUrl}/contracts`
    return this.http.get<ContractInterface[]>(url)
  }
}
