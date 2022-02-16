import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './Appointment';
import { Prev } from './Appointment';
import { api } from './Appointment';
import { just } from './Appointment';
import { basic } from './Appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  obj={
    basic:{},
    prev:{},
    education:{},
    aboutu:{}

  };
  private BASE_URL = environment.API_URL;
  
  constructor(private http: HttpClient) { }


  createAppointment(firstname: string, lastname: string,dateofbirth: string,Mstatus:string,align:Array<just>): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.BASE_URL}/appointments`, { firstname, lastname, dateofbirth, Mstatus, align });
  }
  addprev(align:Array<just>) {
    this.obj.prev=align;

    return this.http.post<Prev>(`${this.BASE_URL}/appointments`, 'pushed addprev');
  }
  addbasic(align:{}) {
    this.obj.basic=align;
    return this.http.post<basic>(`${this.BASE_URL}/appointments`, { align });
  }
  addtodb(align:{}): Observable<basic> {
    return this.http.post<basic>(`${this.BASE_URL}/appointments`, { align });
  }
  addto(): Observable<api> {
    return this.http.post<api>(`${this.BASE_URL}/appointmentss`,  this.obj );//original All In one API
  }
  educationdetailsapi(school10: string,year10: string, percent10: string,school12: string,year12: string, percent12: string, clgug: string, streamug:string, yearug: string, percentug:string,mastersarray:Array<just>,skillsarray:Array<just>): Observable<basic> {
    this.obj.education={ school10,year10, percent10, school12,  year12, percent12, clgug, streamug,yearug, percentug, mastersarray, skillsarray  };
    return this.http.post<basic>(`${this.BASE_URL}/appointments`,'passed');
  }

  aboutyouapi(langarr:Array<just>,actarr:Array<just>,staticc:Array<just>,illness: string,yeari: string,remark: string,phy: string,ach: string,legal: string): Observable<basic> {
    this.obj.aboutu={ langarr, actarr,staticc, illness, yeari, remark, phy, ach, legal};
    this.addto().subscribe(() => { 
    },
    );
    return this.http.post<basic>(`${this.BASE_URL}/appointments`,'passed');
  }
}
