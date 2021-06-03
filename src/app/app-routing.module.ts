import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './components/students/students/students.component';
import { StaffComponent } from './components/staff/staff.component';
import { CharactersComponent } from './components/characters/characters.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'house',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'house',
    component: CharactersComponent,
  },
  {
    path: 'house/:id',
    component: CharactersComponent
  },
  {
    path: 'students/form',
    component: StudentFormComponent
  },
  {
    path: 'students/list',
    component: StudentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
