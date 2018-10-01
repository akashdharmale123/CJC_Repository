import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public info : Student[];
  

  constructor(){
    this.info = [
                  {'name' : 'akasj','address' : 'pune','rollno' : '101'},
                  {'name' : 'pranay','address' : 'amravati','rollno' : '102'},
                  {'name' : 'samir','address' : 'buldhana','rollno' : '103'}
                ]
  }

}
