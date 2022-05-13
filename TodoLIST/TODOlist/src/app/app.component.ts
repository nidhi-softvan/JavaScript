import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  day='friday';
  tasks=['es6','javascript','reactjs','angularjs'];
  taskDetails=[
    {taskname:'es6',taskDescription:'new features introduced in es6',dueDate:'5 april',checkList:['let','const','var']},
    {taskname:'javascript',taskDescription:'fundamentals of javascript',dueDate:'15 april',checkList:['typeconversion','interaction','js specials']},
    {taskname:'reactjs',taskDescription:'main concepts of reactjs',dueDate:'21 april',checkList:['state','prop','form']},
    {taskname:'angular',taskDescription:'learn angular from basics',dueDate:'26 april',checkList:['directives','components','routings']}]
    color="darkblue"
    textDec="underline"
    
    doneTask(){
      this.textDec="line-through"
    }
 
}
