import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { CreateUserInterface } from '../interfaces/users/create-user.interface';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/users/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  findAllUsers(): Observable<UserInterface[]> {
    const url = `${this.baseUrl}/users`
    return this.http.get<UserInterface[]>(url)
  }

  findOneUser(id: string): Observable<UserInterface> {
    const url = `${this.baseUrl}/users`
    return this.http.get<UserInterface>(url)
  }

  updateOneUser(id: string, createUserInterface: CreateUserInterface): Observable<boolean> {
    const url = `${this.baseUrl}/users/${id}`
    return this.http.put<boolean>(url, createUserInterface)
  }

}
