import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutmeprojectsComponent } from './aboutmeprojects.component';



@NgModule({
  declarations: [AboutmeprojectsComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports:[AboutmeprojectsComponent]
})
export class AboutmeprojectsModule { }
