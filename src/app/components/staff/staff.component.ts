import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  public dataStaffs: any;

  public age!: Date;

  showAge!: number;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.mainService.getStaffs().subscribe(
      res => {
        this.dataStaffs = res;
        this.dataStaffs.forEach( (value:any) => {
          this.age = value.dateOfBirth;
          this.ageCalculator(this.age);
          if(this.age){
            value.age = this.showAge;
            console.log(this.age);
          }
        });
        console.log(this.dataStaffs);
      },
      err => console.log(err)
      );
  }

  ageCalculator(age: Date){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
      console.log(this.showAge);

    }
  }



}
