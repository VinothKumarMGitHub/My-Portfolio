import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmehomeComponent } from './aboutmehome/aboutmehome.component';
import { AboutmeresumeComponent } from './aboutmeresume/aboutmeresume.component';
import { AboutmecontactmeComponent } from './aboutmecontactme/aboutmecontactme.component';
import { AboutmeprojectsComponent } from './aboutmeprojects/aboutmeprojects.component';


const routes: Routes = [
  { path: '', component: AboutmehomeComponent   },
  { path: '#home-page', component: AboutmehomeComponent   },
  { path: '#resume-page', component: AboutmeresumeComponent },
  { path: '#projects-page', component: AboutmeprojectsComponent },
  { path: '#contact-page', component: AboutmecontactmeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
