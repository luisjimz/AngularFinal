import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CourseContentComponent } from './course-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    CourseContentComponent    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    CourseContentComponent
  ]
})
export class HomeModule {
 }
