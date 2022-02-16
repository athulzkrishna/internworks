export interface Appointment {
  _id: string;
  firstname: string;
  lastname: string;
  dateofbirth: string;
  Mstatus:string;
  align:Array<just>
  

}
export interface just{
    disp:string;
    val: string;
  }



/*  
export interface pgdetails{
    clgpg:string;
    streampg: string;
    percentpg: string;
  }
  */


export interface Education {
  _id: string;
  school10: string;
  year10:string;
  percent10: string;
  school12: string;
  year12:string;
  percent12: string;
  clgug: string;
  streamug:string;
  yearug:string;
  percentug:string
  mastersarray:Array<just>;
  skillsarray:Array<just>;
}

export interface Aboutyou {
  _id: string;
  langarr:Array<just>;
  actarr:Array<just>;
  staticc:Array<just>;
  illness:string;
  yeari:string;
  remark:string;
  phy:string;
  ach:string;
  legal:string;
}


export interface databruh{
  _id: string;
  data:Array<Aboutyou>;
}


