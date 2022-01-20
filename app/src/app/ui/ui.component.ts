import { Component, OnInit } from '@angular/core';

import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Appointment';

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

}
