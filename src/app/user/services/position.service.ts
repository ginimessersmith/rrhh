import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreatePositionInterface } from '../interfaces/positions/createPosition.interface';
import { Observable,  } from 'rxjs';
import { PositionInterface } from '../interfaces/positions/Position.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private baseUrl:string = environment.baseUrl
  constructor(
    private http:HttpClient,
  ) { }

  createPosition(createPosition:CreatePositionInterface):Observable<boolean>{
    const url = `${this.baseUrl}/positions`
    return this.http.post<boolean>(url,createPosition)
  }

  findAllPositions():Observable<PositionInterface[]>{
    const url = `${this.baseUrl}/positions`
    return this.http.get<PositionInterface[]>(url)
  }
}
