import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateddoctorComponent } from './createddoctor/createddoctor.component';
import { CreatedpatientComponent } from './createdpatient/createdpatient.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PatientComponent } from './patient/patient.component';
import { ServicesComponent } from './services/services.component';
import { ShowDoctorComponent } from './show-doctor/show-doctor.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
//import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:"addPatient",component:PatientComponent},
   {path : 'createdpatient', component: CreatedpatientComponent},
   //{path : "", component: HomePageComponent},
   {path : "showDoctor", component : ShowDoctorComponent, pathMatch : "full"},
   {path : "addDoctor", component : AddDoctorComponent, pathMatch : "full"},
   {path : "showPatient", component : ShowPatientComponent, pathMatch : "full"},
   {path : "", component: HomePageComponent},
   {path : "createddoctor", component: CreateddoctorComponent},

   {path : "contactUs", component : ContactUsComponent, pathMatch : "full"},
   {path : "about", component : AboutComponent, pathMatch : "full"},
   {path : "services", component : ServicesComponent, pathMatch : "full"}
 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
