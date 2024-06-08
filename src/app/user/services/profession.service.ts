import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Profession } from 'src/app/auth/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  private baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAllProfessions(): Observable<Profession[]>{
    const url = `${this.baseUrl}/professions`;
    return this.http.get<Profession[]>(url);
  }

  getProfessionById(id: string): Observable<Profession>{
    const url = `${this.baseUrl}/professions/${id}`;
    return this.http.get<Profession>(url);
  }
}
