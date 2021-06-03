import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

//service
import { MainService } from '../../../services/main.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  data!: any[];

  lista: string[] = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuf'];

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private toastr: ToastrService
  ) { }

  studentForm = this.formBuilder.group({
    name: ['', Validators.required],
    patronus: ['', Validators.required],
    birthday: ['', Validators.required],
    house: ['', Validators.required],
    student: [true]
  });

  ngOnInit(): void {
  }

  send() {
    this.mainService.addRequest(this.studentForm.value);
    this.resetForm()
    this.toastr.success('Added Succesfully', 'Request Added');
  }

  resetForm() {
    this.studentForm.patchValue({
      name: '',
      patronus: '',
      birthday: '',
      house: '',
      student: true
    });
  }
}
