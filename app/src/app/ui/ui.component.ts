import { Component, OnInit } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';
import { basic } from '../Appointment';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  dateofbirth: string;
  firstname: string;
  lastname: string;
  Mstatus: string;
  addnew=0;
  align=[];
  country:any;
  state:any;
  city:any;
  j: any;
  iss=false;
  disabled = false;
  checked = false;
  psr=true;
 
    mvalues=[
    {
      disp:"Single",
      val:"Bachelor"
    },
    {
    disp:"Widowed",
    val:"Widowed"
    },
  {
    disp:"Married",
    val:"Married"
  },
  {
    disp:"Divorced",
    val:"Apart"
  }];
  i={
    fname:"",
    lname:"",
    gender:"",
    mstatus:"",
    dob:"",
    bg:"",
    aadhar:"",
    pan:"",
    passport:"",
    passdate:"",
    res:{
      hno:"",
      l1:"",
      l2:"",
      city:"",
      state:"",
      country:"",
    },

    per:{
      hno:"",
      l1:"",
      l2:"",
      city:"",
      state:"",
      country:"",
    },
    father:{
      name:"",
      occ:"",
      dob:"",
      bg:""
          },
    mother:{
      name:"",
      occ:"",
      dob:"",
      bg:""
          }
  };

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.increase();
    this.populateCountries();
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
  permanent_same_residential()
  {
    this.i.per.hno=this.i.res.hno;
    this.i.per.l1=this.i.res.l1;
    this.i.per.l2=this.i.res.l2;
    this.i.per.state=this.i.res.state;
    this.i.per.city=this.i.res.city;
    this.i.per.country=this.i.res.country;



  }
  add_basic() {
    if (this.psr==false){
      this.permanent_same_residential();
    }

    this.appointmentService.addbasic(this.i)
      .subscribe(() => { 
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
