import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmecontactmeComponent } from './aboutmecontactme.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AboutmecontactmeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule    
  ],
  exports:[AboutmecontactmeComponent]
})
export class AboutmecontactmeModule { }
