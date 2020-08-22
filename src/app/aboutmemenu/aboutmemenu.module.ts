import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AboutmemenuComponent } from './aboutmemenu.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ AboutmemenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ AboutmemenuComponent ]
})
export class AboutmemenuModule {

  constructor(){
  }
 }

 