import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent implements OnInit {
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();

  }
  get f() {
    return this.registrationForm.controls;
  }
  initForm() {
    this.registrationForm = this.fb.group(
      {
        firstname: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100),
          ]),
        ],
        lastname: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
          'abc@gmail.com',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],




      },

    );
  }
  submit() {
    console.log(this.registrationForm.value);
    this.hasError = false;
    this.authService.signUp(this.registrationForm.value).subscribe((res) => {
      if (res.result) {
        console.log(res.result)
        console.log(res)

        this.registrationForm.reset();
        this.router.navigate(['/auth/Signin']);
      }
    });
  }

}
