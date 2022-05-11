import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectName = 'angular app';
  name='nidhijain'
  getName(){
    return "hello " + this.name
    
  }
  greeting(uname:string){
    alert(uname)
  }
  obj={
    name:"nidhi jain",
    age:22
  }
  arrayTasks=['es6','typescript','react']
  a=9
  b=2
  siteUrl=window.location.href;
  clickEvent(evt:string){
    console.warn(evt)
  }
}
