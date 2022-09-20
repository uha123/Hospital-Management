import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientBaseUrl = 'http://localhost:7100/patient';
  private baseurlByid="http://localhost:7100/patient/getPatient";

  constructor(private http:HttpClient) { }

  getAllPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.patientBaseUrl}/getAllDoctors`);
  }

  addPatient(patient:Patient):Observable<Object>{
    console.log(patient);
    return  this.http.post<Object>(`${this.patientBaseUrl}/add`,patient);
  }
  getPatientById(id:any): Observable<Patient>{
    return this.http.get<Patient>(`${this.baseurlByid}/${id}`);

  }


}
