import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AboutmefooterComponent } from './aboutmefooter.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AboutmefooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [ AboutmefooterComponent]
})
export class AboutmefooterModule { 

  constructor(){
  }

}
