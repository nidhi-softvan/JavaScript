import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observables';
  observable=new Observable((observer)=>{
     console.log("obervable starts");
     setTimeout(()=>{ observer.next("FROM OBSERVABLES");},1000)

     observer.next("HELLO");
     setTimeout(()=>{observer.error(new Error("error method in observer !"))},3000);
     setTimeout(()=>{observer.next("this will not get emitted due to error method")},4000);
     setTimeout(()=>{
       observer.complete()
     },6000)
  });

  ngOnInit(): void {


      this.observable.subscribe((val)=>{
        console.log(val);
      },(error)=>{
        alert(error.message)
      },()=>{
         alert("observable completed emitting all values")
      });
  }
}
