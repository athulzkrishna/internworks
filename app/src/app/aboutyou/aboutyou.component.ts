
import { Component, OnInit, NgModule } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';
import { Aboutyou } from '../Appointment';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-aboutyou',
  templateUrl: './aboutyou.component.html',
  styleUrls: ['./aboutyou.component.css']
})


export class AboutyouComponent implements OnInit {
  addnew=0;
  addnew1=0;
  langarr=[];
  actarr=[];
  others=[1];
  
  staticc=[];
  j: any;
  j1: any;
  j2: any;
  iss=false;
  iss1=false;
  disabled = false;
  checked = false;
  illness: string;
  yeari: string;
  remark: string;
  phy: string;
  ach: string;
  legal: string;
  
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.increase();
    this.increase1();
    this.staticfn();
  }

  aboutyouapi() {
    this.appointmentService.aboutyouapi(this.langarr, this.actarr, this.staticc, this.illness, this.yeari, this.remark, this.phy, this.ach,this.legal)
      .subscribe(() => {
        this.langarr=[];
        this.actarr=[];
        this.staticc=[];
        this.addnew=0;
        this.addnew1=0;
        this.iss=false;
        this.iss1=false;
        this.increase();
        this.increase1();
        this.staticfn();
        this.illness='';
        this.yeari = '';
        this.remark = '';
        this.phy ='';
        this.ach ='';
        this.legal='';
      },
      );
  }
  staticfn(){
    this.j2 = {
      otherobj:{
        legal:"",
        illness:""
    }
  };
  this.staticc.push(this.j2);
  }
  increase(){
            this.addnew=this.addnew+1;
            if(this.addnew>1)
            {
              this.iss=true;
            }
            this.j = {
              langobj:{
                lang:"",
                read:"",
                write:"",
                speak:""
            }
           };
            this.langarr.push(this.j);
            //console.log(this.align);
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
            this.langarr.pop();
            }
  increase1(){
              this.addnew1=this.addnew1+1;
              if(this.addnew1>1)
              {
                this.iss1=true;
              }
              this.j1 = {
                activityobj:{
                  acttype:"",
                  act:""
                }
             };
              this.actarr.push(this.j1);
              //console.log(this.align);
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
              this.actarr.pop();
              }
  
}

