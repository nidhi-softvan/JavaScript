import { Component, Inject, OnInit, Optional, Injectable, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../services/tickets.service';
import { AuthService } from '../services/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TicketsDataSource } from '../services/tickets.datasource';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})



export class EditComponent implements OnInit  {
  editTic:FormGroup;
  element:any;
  dataSource!:TicketsDataSource;

  tickets:any;


  @Output('refreshData') refreshData = new EventEmitter<any>();
  total!: number;

  constructor(public fb:FormBuilder,public ticketsService: TicketsService,public router: Router,public authservice:AuthService,public dialogRef: MatDialogRef<EditComponent>,    @Optional() @Inject(MAT_DIALOG_DATA) data:any,private _snackBar:MatSnackBar
  ) {
    this.element=data.tic;
    console.log(this.element);
     this.editTic=this.fb.group({
      ticket_id:[''],
      ticket_description:['']
    })
    this.editTic.setValue({
      ticket_id: this.element.ticket_id,

      ticket_description: this.element.ticket_description
    });

    // this.editTic=this.fb.group({
    //   ticket_id:[''],
    //   ticket_description:['']
    // })

  }

  ngOnInit(): void {

  }
  editTicket(){
    console.log("data submitted");
    // console.log(this.id)
    console.log(this.editTic.value);
    this.ticketsService.updateTicket(this.editTic.value,this.element._id).subscribe((res)=>{
    if(res){

      console.log("updated ticket",res);
      this.dataSource=new TicketsDataSource(this.ticketsService);
      console.log('this',this.tickets);
      this.dialogRef.close();
      this.refreshData.emit('');

      this._snackBar.open("Ticket Updated");

    }
     })
    }



    // })
  


  cancel(){

  this.dialogRef.close();

  this.router.navigate(['tickets'])
}
}
