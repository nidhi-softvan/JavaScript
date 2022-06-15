import { Injectable, ViewChild } from '@angular/core';
import { CollectionViewer,DataSource } from '@angular/cdk/collections';
import { Tickets } from '../interfaces/tickets';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { TicketsService } from './tickets.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Injectable()
export class TicketsDataSource implements DataSource<Tickets> {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private ticketSubject=new BehaviorSubject<Tickets[]>([]);
  private loadingTicket = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingTicket.asObservable();

  total!:number;

  constructor(private ticketsService:TicketsService) { }

  connect(collectionViewer:CollectionViewer):Observable<Tickets[]>{
    console.log("Connecting data source");
    return this.ticketSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.ticketSubject.complete();
    this.loadingTicket.complete();
  }

  loadTickets(pageSize:number, pageIndex:number, sortType:string, sortDirection:string, searchKeyword:string){
    this.loadingTicket.next(true);
    this.ticketsService.getTickets(pageSize,pageIndex,sortType,sortDirection,searchKeyword).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingTicket.next(false))
    )
    .subscribe(tickets =>{
      console.log("TICKETS TOTAL",tickets.total);

      this.ticketSubject.next(tickets.tickets)
      this.total=tickets.total;
      console.log("TOTAL",this.total)
      

    });

  }
}
