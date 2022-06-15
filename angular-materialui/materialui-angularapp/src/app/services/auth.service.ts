import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs';
import { HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string=environment.apiURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http:HttpClient,public router:Router) { }
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/users/Signup`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Sign-in
  signIn(user: User) {
    console.log(user)
    return this.http
      .post<any>(`${this.endpoint}/users/Signin`, user)
      .subscribe((res: any) => {
        console.log("token:",res.token)
        localStorage.setItem('access_token', res.token);
        // console.log("res",res)
        console.log("user:",res.result);
        this.router.navigate(['tickets'],{state:{user:res.result.firstName+res.result.lastName}});
      });
  }
  getUser() {
    let api = `${this.endpoint}/users/Signin`;
      return this.http.get(api, { headers: this.headers }).pipe(
        map((res) => {
          console.log(res)
          return res || {};

        }),
        catchError(this.handleError)
      );
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');

    let removeUser=localStorage.removeItem("user");
    if (removeToken == null && removeUser==null) {
      this.router.navigate(['Signin']);
    }
  }
  // getAllUsers(){
  //   console.log("all users func")
  //   let api = `${this.endpoint}/users/all`;
  //   console.log(api)
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res) => {
  //       console.log(res)
  //       return res || {};

  //     }),
  //     catchError(this.handleError)
  //   );
  // }
  // getUserProfile(_id: any): Observable<any> {
  //   let api = `${this.endpoint}/users/${_id}`;
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res) => {
  //       return res || {};
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // Error
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

}
