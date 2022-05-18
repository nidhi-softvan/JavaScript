import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  convertText:string="I am being managed by pipes";
  num1:number=3.246;
  num2:number=0.6;
  birthday=new Date(2000,6,12)
  data={
    data1:12,
    data2:13,
    data3:14,
    data4:15
  }
  
}
