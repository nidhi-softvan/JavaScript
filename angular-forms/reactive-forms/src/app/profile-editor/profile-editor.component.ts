import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEDitorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profileForm=new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zip:new FormControl('')
    })
  })

  onSubmit(){
    console.warn(this.profileForm.value)
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Nidhi',
      address:{
        street:'12',
        city:'ahmedabad',
        state:'gujarat'
      }
    })
  }
}
