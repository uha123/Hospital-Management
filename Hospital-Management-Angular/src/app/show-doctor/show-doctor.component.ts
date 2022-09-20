import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }

  doctors:Doctor[] = [];

  doctorDetails:Doctor = new Doctor();

  doctorNames:String[] = [];
  dataPresent:boolean = false;
  doctorName:String = "";

  errMsg = "";

  ngOnInit(): void {
    this.doctorService.getDoctorsName().subscribe(data=>{
      this.doctorNames=data;
    },error=>console.log(error));
    
    this.doctorService.getAllDoctors().subscribe(data => {
      this.doctors=data;
      
      for(var i=0;i<this.doctors.length;i++)
          this.doctorNames.push(this.doctors[i].name);
    
    },error=> console.log(error));
  }

  showDoctorInfo(showDoctorForm: any) {
    console.log(showDoctorForm);

    var docName = showDoctorForm.value.doctorName;

    if (docName !== "") {
      for (var i in this.doctors) {
        if (this.doctors[i].name === docName)
          this.doctorDetails = this.doctors[i];
      }
      this.dataPresent = true;
      this.errMsg = "";
    }else
        this.errMsg = "Please select a doctor";
  }

}