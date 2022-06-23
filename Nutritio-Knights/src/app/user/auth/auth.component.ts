import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.isLoggedIn =b; 

    })
  }

  logIn(): void{
      this.auth.loginWithRedirect();
  }

  logOut(): void{
      this.auth.logout();
  }

  getToken(){
    return localStorage.getItem('access_token');
  }
  

}

