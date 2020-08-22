import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AboutmehomeComponent } from './aboutmehome.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { AboutmefooterModule } from '../aboutmefooter/aboutmefooter.module';

@NgModule({
  declarations: [AboutmehomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AboutmefooterModule
  ],
  exports: [ AboutmehomeComponent]
})
export class AboutmehomeModule { 

  constructor(){
  }

}
