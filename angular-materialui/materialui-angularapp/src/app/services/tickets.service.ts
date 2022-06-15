import { Injectable ,ChangeDetectorRef} from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Tickets } from '../interfaces/tickets';
import { TicketsDataSource } from './tickets.datasource';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  endpoint:string=environment.apiURL;
  // dataSource!: MatTableDataSource<any>;
  dataSource!:TicketsDataSource;
  tickets!:Tickets
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  page!: number;
  data:any;
   total!:number
  constructor(private http:HttpClient,public router:Router, ) { }


  // getTickets(pageSize:number, pageIndex:number, sortType:string, sortDirection:string, searchKeyword:string): Observable<any>{
  //   let api = `${this.endpoint}/tickets?pageSize=10&pageIndex=0&sortType=createdAt&sortDirection=desc&searchKeyword=`;
  //   console.log(pageSize, pageIndex, sortType, sortDirection, searchKeyword)
  //   let queryParams = new HttpParams();
  //   return this.http.get(api, {params:queryParams, headers: this.headers }).pipe(
  //         map((res) => {
  //           console.log("response",res)
  //           return res || {};

  //         }),
  //         catchError(this.handleError)
  //       );
  // }


  //
  getTickets(pageSize:number, pageIndex:number, sortType:string, sortDirection='desc', searchKeyword:string):Observable<any>{
    let api = `${this.endpoint}/tickets`;


    return this.http.get(api,
      {params:new HttpParams().set('pageSize',pageSize).set('pageIndex',pageIndex).set('sortType',sortType).set('sortDirection',sortDirection.toString()).set('searchKeyword',searchKeyword)
    }).pipe(
      map(
        (res) => {
                    console.log("response",res)

                    return res || {};

        }),
      catchError(this.handleError)
    )


  }


  //
  // getTickets(pageSize:number, pageIndex:number, sortType:string, sortDirection='desc', searchKeyword:string):Observable<any>{
  //   let api = `${this.endpoint}/tickets`;


  //   return this.http.get(api,
  //     {params:new HttpParams().set('pageSize',pageSize).set('pageIndex',pageIndex).set('sortType',sortType).set('sortDirection',sortDirection.toString()).set('searchKeyword',searchKeyword)
  //   }).pipe(
  //     map(
  //       (res) => {
  //                   console.log("response",res)

  //                   return res || {};
  //       }),
  //     catchError(this.handleError)
  //   )

  // }

  addTicket(ticket:any): Observable<any> {
    let api = `${this.endpoint}/tickets/add`;

    return this.http.post(api, ticket).pipe(catchError(this.handleError));
  }
  updateTicket(ticket:any,id:any): Observable<any> {
    console.log("updating..")
    let api = `${this.endpoint}/tickets/${id}`;
    return this.http.put(api,ticket,id).pipe(catchError(this.handleError));
  }
  resolveTicket(_id:any):Observable<any>{
    let api=`${this.endpoint}/tickets/resolve?id=${_id}`;
    console.log("query id",_id)
    let queryParams = new HttpParams();

    return this.http.put(api, {params:queryParams, headers: this.headers }).pipe(
      map((res) => {
        console.log("response",res)
        return res || {};

      }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


  // refresh(){
  //   this.dataSource=new TicketsDataSource(this.ticketsService);


  //   this.dataSource.loadTickets(15,0,'createdAt','desc','');

  //   }

}
