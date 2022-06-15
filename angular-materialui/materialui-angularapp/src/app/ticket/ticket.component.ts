import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from '../services/tickets.service';
import { AuthService } from '../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  addTic:FormGroup;
  tickets:any;
  @Output('refreshData') refreshData = new EventEmitter<any>();
  constructor(public fb:FormBuilder,public ticketsService: TicketsService,public router: Router,public authservice:AuthService,public dialogRef: MatDialogRef<TicketComponent>,private _snackBar: MatSnackBar) {
    this.addTic=this.fb.group({
      ticket_id:[''],
      ticket_description:['']
    })
  }

  ngOnInit(): void {
  }

  addTicket(){
     console.log("data submitted")
     console.log(this.addTic.value);

     this.ticketsService.addTicket(this.addTic.value).subscribe((res)=>{
       if(res){
         console.log("new ticket",res);
         this.dialogRef.close();
         this.refreshData.emit('');

         this._snackBar.open("Ticket Added");


      }

      // this.ticketsService.getTickets(10,0,'createdAt','desc',"");
      })

  }
  cancel(){

    this.dialogRef.close();

    this.router.navigate(['/tickets'])
  }

}
