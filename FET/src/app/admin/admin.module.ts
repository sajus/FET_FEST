import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { SchoolComponent } from './school/school.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

@NgModule({
  declarations: [AdminComponent, DashboardComponent, StudentComponent, SchoolComponent, AddStudentComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
