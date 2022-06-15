import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  signinForm:FormGroup
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: [''],
    });
   }

  ngOnInit(): void {
  }



  loginUser() {
    console.log(this.signinForm.value)
    this.authService.signIn(this.signinForm.value);
  }

}
