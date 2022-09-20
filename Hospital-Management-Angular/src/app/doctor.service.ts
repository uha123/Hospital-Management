import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private doctorBaseUrl = 'http://localhost:7100/doctor';
  //doctorBaseUrl: any;

  constructor(private http:HttpClient) { }

  getAllDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.doctorBaseUrl}/getAllDoctors`);
  }
  addDoctor(doctor:Doctor):Observable<Doctor>{
    console.log(doctor);
    return  this.http.post<Doctor>(`${this.doctorBaseUrl}/add`,doctor);
  }
  getDoctorsName():Observable<String[]>{
    return this.http.get<String[]>(`${this.doctorBaseUrl}/GetDocName`);
}

}
