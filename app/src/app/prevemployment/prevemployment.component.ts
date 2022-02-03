import { Component, OnInit } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';
import { Prev } from '../Appointment';
@Component({
  selector: 'app-prevemployment',
  templateUrl: './prevemployment.component.html',
  styleUrls: ['./prevemployment.component.css']
})
export class PrevemploymentComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  dateofbirth: string;
  firstname: string;
  lastname: string;
  Mstatus: string;
  addnew=0;
  align=[];

  j: any;
  iss=false;
  disabled = false;
  checked = false;
  psr=true;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.increase();
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
  add_prev() {

    this.appointmentService.addprev(this.align)
      .subscribe((createdAppointment: Prev) => { 
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
            this.j = {
              job:{
                name:"",
                role:"",
                logo:"",
                sdate:"",
                edate:"",
                type:"",
                yearlypay:0,
                rfl:""
              },
              hr:{name:"",
                  email:"",
                  phone:""
                },
              prev_manager:{
                name:"",
                email:"",
                phone:""

              }

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


}



