import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutmeresumeComponent } from './aboutmeresume.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [ AboutmeresumeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  exports:[AboutmeresumeComponent]
})
export class AboutmeresumeModule { }
