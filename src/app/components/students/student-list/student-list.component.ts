import { Component, OnInit, Input } from '@angular/core';

//service
import { MainService } from '../../../services/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  data: any;

  constructor(
    private mainService: MainService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.data = this.mainService.getRequest();
  }

  deleteRequest(data: any){
    if(confirm('Are you sure you want to delete it?')){
      this.mainService.deleteRequest(data);
      this.toastr.error('Deleted Succesfully', 'Request Deleted');
    }
  }
}
