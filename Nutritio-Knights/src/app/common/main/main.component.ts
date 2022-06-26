import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'NutritioKnights',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  user: any = {}

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
    this.user = u;
    })

    this.auth.user$.subscribe(u => {
      if(u !== null){
        this.router.navigateByUrl('/home');
      }
    });
  }

}
