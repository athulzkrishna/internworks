import { Component, OnInit } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';

@Component({
  selector: 'app-aboutyou',
  templateUrl: './aboutyou.component.html',
  styleUrls: ['./aboutyou.component.css']
})
export class AboutyouComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  dateofbirth: string;
  firstname: string;
  lastname: string;
  Mstatus: string;
  addnew=0;
  align=[];
  addnew1=0;
  align1=[];
  country:any;
  state:any;
  city:any;
  j: any;
  iss=false;
  iss1=false;
  disabled = false;
  checked = false;
  psr=true;
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.increase();
    this.populateCountries();
    this.increase1();
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    this.appointmentService.createAppointment(this.firstname,this.lastname,this.dateofbirth,this.Mstatus,this.align)
      .subscribe((createdAppointment: Appointment) => {
        this.dateofbirth = '';
        this.firstname = '';
        this.lastname = '';
        this.Mstatus='';
        this.align=[];
        this.addnew=0;
        this.iss=false;
        this.increase();
        const appointmentDate = new Date(createdAppointment.dateofbirth).toDateString();
        this.successMsg = `Good things takes time ${appointmentDate}`;
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
            this.j = {disp:"",
            val:""
           };
            this.align.push(this.j);
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
            this.align.pop();
            }
  increase1(){
              this.addnew1=this.addnew1+1;
              if(this.addnew1>1)
              {
                this.iss1=true;
              }
              this.j = {disp:"",
              val:""
             };
              this.align1.push(this.j);
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
              this.align1.pop();
              }
  toggle()
            {
              this.psr=!this.psr;
            }
  populateCountries(){
    this.country=Country.getAllCountries();
    this.state=State.getAllStates();
    this.city=City.getAllCities();
  }


}
