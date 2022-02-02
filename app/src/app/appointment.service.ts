import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';
import { Education } from './Appointment';
import { just } from './Appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.BASE_URL}/appointments`);
  }

  createAppointment(firstname: string, lastname: string,dateofbirth: string,Mstatus:string,align:Array<just>): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.BASE_URL}/appointments`, { firstname, lastname, dateofbirth, Mstatus, align });
  }

  educationdetailsapi(school10: string, percent10: string,school12: string, percent12: string, clgug: string, streamug:string, percentug:string): Observable<Education> {
    return this.http.post<Education>(`${this.BASE_URL}/edu`, { school10, percent10, school12, percent12, clgug, streamug, percentug });
  }

//,this.school12,this.percent12,this.clgug,this.streamug,this.percentug)
  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/appointments/${id}`);
  }
}
