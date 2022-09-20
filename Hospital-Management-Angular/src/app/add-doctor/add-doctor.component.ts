import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
 import list from './specialist.json';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  specialistList:{specialist:String[]}[]=list;
  specialist:String[] = [];



  constructor(private doctorService:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.specialist=this.specialistList[0].specialist;
    //console.log(this.specialistList);
  }
  
  addDoctor(doctor:Doctor){
  this.doctorService.addDoctor(doctor).subscribe(data=>{
    console.log(data)
  },error=>console.log(error)
  );
}
submit(doctor:any){
 console.log(doctor);
 this.addDoctor(this.doctor);
 this.router.navigate(['createddoctor'])
}
}