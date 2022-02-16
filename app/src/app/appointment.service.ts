import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';
import { Education } from './Appointment';
import { just } from './Appointment';
import { databruh } from './Appointment';
import { Aboutyou } from './Appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  data = new Array(); 
  
  createAppointment(firstname: string, lastname: string,dateofbirth: string,Mstatus:string,align:Array<just>): Observable<Appointment> {
    this.data.push( { firstname, lastname, dateofbirth, Mstatus, align });
    return this.http.post<Appointment>(`${this.BASE_URL}/appointments`, { firstname, lastname, dateofbirth, Mstatus, align });
  }

  educationdetailsapi(school10: string,year10: string, percent10: string,school12: string,year12: string, percent12: string, clgug: string, streamug:string, yearug: string, percentug:string,mastersarray:Array<just>,skillsarray:Array<just>): Observable<Education> {
    this.data.push({ school10,year10, percent10, school12,  year12, percent12, clgug, streamug,yearug, percentug, mastersarray, skillsarray  });
    return this.http.post<Education>(`${this.BASE_URL}/edu`,'passed');
  }

  aboutyouapi(langarr:Array<just>,actarr:Array<just>,staticc:Array<just>,illness: string,yeari: string,remark: string,phy: string,ach: string,legal: string): Observable<databruh> {
    this.data.push({ langarr, actarr,staticc, illness, yeari, remark, phy, ach, legal});
    return this.http.post<databruh>(`${this.BASE_URL}/abb`,this.data);
    
    // { langarr, actarr,staticc, illness, yeari, remark, phy, ach, legal}
  }

//,this.school12,this.percent12,this.clgug,this.streamug,this.percentug)
  
}
