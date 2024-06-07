import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { LoginRequestInterface, LoginResponseInterface } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }

  login(loginRequestInterface: LoginRequestInterface): Observable<LoginResponseInterface> {
    const url: string = `${this.baseUrl}/users/authenticate`
    return this.http.post<LoginResponseInterface>(url, loginRequestInterface)
  }
}
