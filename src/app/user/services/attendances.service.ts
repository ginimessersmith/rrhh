import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { AttendancesInterface } from '../interfaces/attendances/attendances.interface';

@Injectable({
  providedIn: 'root'
})
export class AttendancesService{

  private baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

  createAttendances(attendancesInterface: AttendancesInterface): Observable<boolean>{
    const url = `${this.baseUrl}/attendances`;
    return this.http.post<boolean>(url, attendancesInterface);
  }

  getAllAttendances():Observable<AttendancesInterface[]>{
    const url = `${this.baseUrl}/attendances`;
    return this.http.get<AttendancesInterface[]>(url);
  }

  oneAttendance(id: string): Observable<AttendancesInterface> {
    const url: string = `${this.baseUrl}/attendances/${id}`
    console.log('id from service',id)
    return this.http.get<AttendancesInterface>(url,)
  }
}
