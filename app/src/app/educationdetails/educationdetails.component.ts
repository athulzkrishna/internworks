import { Education } from './../Appointment';
//educationdetails
import { Component, OnInit } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';


@Component({
  selector: 'app-educationdetails',
  templateUrl: './educationdetails.component.html',
  styleUrls: ['./educationdetails.component.css']
})
export class EducationdetailsComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  school10: string;
  percent10: string;
  school12: string;
  percent12: string;
  clgug: string;
  streamug:string;
  percentug:string;
  addnew=0;
  addnew1=0;
  mastersarray=[];
  skillsarray=[];
  j: any;
  j1: any;
  iss=false;
  iss1=false;
  disabled = false;
  checked = false;
  psr=true;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.increase();
    this.increase1();
  }
  educationdetailsapi() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.educationdetailsapi(this.school10,this.percent10,this.school12,this.percent12,this.clgug,this.streamug,this.percentug,this.mastersarray)
      .subscribe((createdAppointment: Education) => {
        this.school10 = '';
        this.percent10 = '';
        this.school12 = '';
        this.percent12 = '';
        this.clgug = '';
        this.streamug = '';
        this.percentug = '';
        this.mastersarray=[];
        
        this.addnew=0;
        this.addnew1=0;
        this.iss=false;
        this.increase();
        
        
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
  increase(){
            this.addnew=this.addnew+1;
            if(this.addnew>1)
            {
              this.iss=true;
            }
            this.j = {clgpg:"",
            streampg:"",
            percentpg:""
           };
            this.mastersarray.push(this.j);
            //console.log(this.mastersarray);
            }
  decrease(){
            if(this.addnew>1)
            {
                this.addnew=this.addnew-1;
                if(this.addnew==1)
                  {
                    this.iss=false;
                  }
            }
            else
            {
                this.iss=false;
            }      
            this.mastersarray.pop();
            }
    increase1(){
              this.addnew1=this.addnew1+1;
              if(this.addnew1>1)
              {
                this.iss1=true;
              }
              this.j1 = {disp:"",
              val:""
             };
              this.skillsarray.push(this.j1);
              //console.log(this.mastersarray);
              }
    decrease1(){
              if(this.addnew1>1)
              {
                  this.addnew1=this.addnew1-1;
                  if(this.addnew1==1)
                    {
                      this.iss1=false;
                    }
              }
              else
              {
                  this.iss1=false;
              }      
              this.skillsarray.pop();
              }
  

}