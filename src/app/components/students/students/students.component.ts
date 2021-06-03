import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//services
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  filterStudent = '';

  public dataStudents: any = [];

  public age!: number;

  showAge!: any;

  constructor(private mainService: MainService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.mainService.getStudents().subscribe(
      (res) => {
        this.dataStudents = res;
        this.dataStudents.forEach((value: any) => {
          if (value.dateOfBirth != '' && value.yearOfBirth != '') {
            this.age = value.yearOfBirth;
          } else if (value.dateOfBirth == '' && value.yearOfBirth != '') {
            this.age = value.yearOfBirth;
          } else if (value.dateOfBirth == '' && value.yearOfBirth == '') {
            this.age = 0;
          }
          this.ageCalculator(this.age);
          if (this.age) {
            value.age = this.showAge;
          }
        });
      },
      (err) => console.log(err)
    );
  }

  ageCalculator(age: number) {
    if (this.age) {
      const today = new Date().getFullYear();
      this.showAge = Math.abs(today - this.age);
    }
  }
}
