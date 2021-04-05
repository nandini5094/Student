import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class CandidatedataService {

  public _studentinformationsource = new BehaviorSubject<Student>(null);
 // public studentinformation$ = this._studentinformationsource.asObservable();

  constructor() { }

  sendStudentData(message:Student){
    this._studentinformationsource.next(message);
  }
}
