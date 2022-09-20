import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: Patient = new Patient();
  doctors: Doctor[]=[];
  names:string[]=[];
  doctorName:string="";
  constructor(private patientService:PatientService,private doctorService:DoctorService ,private router:Router) { }


  ngOnInit(): void {
      this.doctorService.getAllDoctors().subscribe(data => {
        this.doctors=data;
        //console.log(data)
      /* for(var i in data)
       {
        data[i].name;
       }*/
       console.log("doct")
       console.log(this.doctors)
       for(var i in this.doctors)
       {
       this.names.push (this.doctors[i].name);
       }
      },error=> console.log(error));
    
  }
  addPatient(patient:Patient){
    this.patientService.addPatient(patient).subscribe(data=>{
      console.log(data)
    },error=>console.log(error)
    );
  }
  submit(){
    console.log(this.patient);
    this.addPatient(this.patient);
    this.router.navigate(['createdpatient'])
    
  }
}
