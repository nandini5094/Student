import { Component, OnInit } from '@angular/core';
import { CandidatedataService } from '../candidatedata.service';
import { Student } from '../student';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent implements OnInit {

  constructor(private _candidate:CandidatedataService) { }

  studentData:Student;
  

  ngOnInit(): void {
    this._candidate._studentinformationsource
    .subscribe(
      message => {
        this.studentData = message;
        console.log(this.studentData);
      }
    );
  }

}
