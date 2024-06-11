import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { PositionInterface } from '../interfaces/positions/Position.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionsService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createPosition(positionInterface: PositionInterface): Observable<boolean>{
    const url = `${this.baseUrl}/positions`;
    return this.http.post<boolean>(url, positionInterface);
  }

  getAllPositions():Observable<PositionInterface[]>{
    const url = `${this.baseUrl}/positions`;
    return this.http.get<PositionInterface[]>(url);
  }

  onePosition(id: string): Observable<PositionInterface> {
    const url: string = `${this.baseUrl}/positions/${id}`
    console.log('id from service',id)
    return this.http.get<PositionInterface>(url,)
  }
}
