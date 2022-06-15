import { ElementRef, Inject ,OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TicketsService } from '../services/tickets.service';
import { CollectionViewer,DataSource } from '@angular/cdk/collections';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { TicketComponent } from '../ticket/ticket.component';
import { Component, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort,Sort} from '@angular/material/sort';
import { TicketsDataSource } from '../services/tickets.datasource';
import { Tickets } from '../interfaces/tickets';
import { tap } from 'rxjs/internal/operators/tap';
import { merge } from 'rxjs/internal/observable/merge';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import {LiveAnnouncer} from '@angular/cdk/a11y';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // tickets:any;
  // id:any
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // displayedColumns: string[] = ['status', 'ticketid', 'ticketdescription', 'createdon','createdby','action'];

  // dataSource!: MatTableDataSource<any>;

  // data:any;
  pageEvent!:PageEvent
  tickets!:Tickets;
  dataSource!:TicketsDataSource;
  displayedColumns: string[] = ['status', 'ticketid', 'ticketdescription', 'createdon','createdby','action'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('input')
  input!: ElementRef;


  //


  constructor(private _liveAnnouncer: LiveAnnouncer,private ticketsservice:TicketsService,private authService:AuthService,private router:Router,private dialog:MatDialog) {}


  ngOnInit(): void {


    this.dataSource=new TicketsDataSource(this.ticketsservice);

    console.log("total tic",this.dataSource.total)



    let currentPage= 0;
    console.log("cuurentPage",currentPage);
    this.dataSource.loadTickets((this.paginator?.pageSize ?? 10),currentPage,'createdAt','desc','');



    console.log("current user",history.state);
    console.log("total tic",this.dataSource.total);
       //  this.total=this.dataSource.total
    // let currentPage = (this.paginator?.pageIndex ?? 0)+1;
        // this.dataSource.loadTickets(10,0,'createdAt','desc','');


    // this.totalRecords = result.totalCount;

    // this.dataSource.loadTickets(this.dataSource.total,1,'createdAt','desc','');
  //  console.log("total tick",this.total)


  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    fromEvent(this.input.nativeElement,'keyup')
    .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
            this.paginator.pageIndex = 0;
            this.loadTicketsPage();

        })
    )
    .subscribe();
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
    merge(this.sort.sortChange, )

        .pipe(
            tap(() => this.loadTicketsPage())
        )
        .subscribe();

  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  onPaginationChange(event:PageEvent){
    console.log("Page event",event);
      let page=event.pageIndex;
      console.log("Index",page);
      let size=event.pageSize;
      console.log("Page size",size);
      page=page+1;
      this.dataSource.loadTickets(size,page,'createdAt','desc','')
  }

  loadTicketsPage(){
    this.dataSource.loadTickets(
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.active,
      this.sort.direction,
      this.input.nativeElement.value,
    )
  }


  refreshData(){
    console.log("Refreshing data");
    this.dataSource=new TicketsDataSource(this.ticketsservice);


    this.dataSource.loadTickets(this.paginator.pageSize,this.paginator.pageIndex,'createdAt','desc','');

  }


  logout() {
    this.authService.doLogout();
  }



  addTicketDialog(){
   const dialogConfig=new MatDialogConfig()
   dialogConfig.disableClose=true;
   dialogConfig.autoFocus=true;
   dialogConfig.width="60%";
   const d= this.dialog.open(TicketComponent);
   d.afterClosed().subscribe(result=>{

    this.refreshData();
   })
  }

  refreshTable() {
    this.dataSource=new TicketsDataSource(this.ticketsservice);
    this.dataSource.loadTickets(this.paginator.pageSize,this.paginator.pageIndex,'createdAt','desc','');

  }

  editTicketDialog(element:any){

   const dialogConfig=new MatDialogConfig()
   dialogConfig.disableClose=true;

   dialogConfig.width="60%";

   const d= this.dialog.open(EditComponent,{data:{tic:element}});
   console.log(element)
   d.afterClosed().subscribe(result=>{
    console.log("RESULT",result)
    this.refreshData();
   })



  }

  resolveTic(_id:any){
    console.log("id::",_id)
    this.ticketsservice.resolveTicket(_id).subscribe((res:any)=>{
      console.log(res)
    })
  }

  userName=history.state.user;
  


  }




// refresh(){
  //   this.ticketsservice.getTickets(15,0,'createdAt','desc',"").subscribe((res:any)=>{
  //     this.dataSource=new MatTableDataSource(this.tickets);
  //     console.log(res.tickets);
  //   })
  // }


  // this.ticketsservice.getTickets(12,0,'createdAt','desc',"").subscribe((res:any)=>{


    //   this.tickets=res.tickets;
    //   console.log('this',this.tickets);
    //   // this.dataSource=new MatTableDataSource(this.tickets);
    //   this.dataSource=this.tickets;

      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    //   console.log("TICKETS",res.tickets);

    // });
