import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CharactersComponent } from './components/characters/characters.component';
import { StudentsComponent } from './components/students/students/students.component';
import { StaffComponent } from './components/staff/staff.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';

//services
import { MainService } from './services/main.service';

//Filter pipe
import { FilterPipe } from './components/students/pipes/filter.pipe';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    CharactersComponent,
    StudentsComponent,
    StaffComponent,
    NavigationComponent,
    StudentFormComponent,
    StudentListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
