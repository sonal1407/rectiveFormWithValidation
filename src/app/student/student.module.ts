import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule}from'@angular/forms'
import { StudentRoutingModule } from './student-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewComponent, EditComponent, AddComponent],
  providers:[StudentService]
})
export class StudentModule { }
