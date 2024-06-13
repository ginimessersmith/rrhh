import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { RequestInterface } from '../interfaces/app/request.interface';

@Injectable({
  providedIn: 'root'
})
export class BackIAService {

  public baserUrlBack:string = environment.baseUrlBack

  constructor(
    private http:HttpClient
  ) { }

  findAllRequest():Observable<RequestInterface[]>{
    const url:string = `${this.baserUrlBack}/curriculum/find-all-request`
    return this.http.get<RequestInterface[]>(url)
  }
}
