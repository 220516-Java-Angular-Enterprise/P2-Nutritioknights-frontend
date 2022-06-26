import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(b => {
      this.isLoggedIn =b; 

    })
  }

  logIn(): void{
    this.router.navigateByUrl('home')
  }

  logOut(): void{
      this.router.navigateByUrl('')
      this.auth.logout();
  }

}

