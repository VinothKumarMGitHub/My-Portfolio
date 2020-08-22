import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmemenuComponent } from './aboutmemenu/aboutmemenu.component';
import { AboutmefooterComponent } from './aboutmefooter/aboutmefooter.component';
import { AboutmehomeComponent } from './aboutmehome/aboutmehome.component';
import { AboutmeresumeComponent } from './aboutmeresume/aboutmeresume.component';
import { AboutmeprojectsComponent } from './aboutmeprojects/aboutmeprojects.component';
import { AboutmecontactmeComponent } from './aboutmecontactme/aboutmecontactme.component';
import { AboutmemenuModule } from './aboutmemenu/aboutmemenu.module';
import { AboutmefooterModule } from './aboutmefooter/aboutmefooter.module';
import { AboutmehomeModule } from './aboutmehome/aboutmehome.module';
import { AboutmeprojectsModule } from './aboutmeprojects/aboutmeprojects.module';
import { AboutmeresumeModule } from './aboutmeresume/aboutmeresume.module';
import { AboutmecontactmeModule } from './aboutmecontactme/aboutmecontactme.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,

    AboutmeresumeModule,
    AboutmeprojectsModule,
    AboutmehomeModule,
    AboutmemenuModule,
    AboutmefooterModule,
    AboutmecontactmeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
  }

}
