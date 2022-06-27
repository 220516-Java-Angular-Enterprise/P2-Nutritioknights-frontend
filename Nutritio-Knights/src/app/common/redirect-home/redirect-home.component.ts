import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-home',
  templateUrl: './redirect-home.component.html',
  styleUrls: ['./redirect-home.component.css']
})
export class RedirectHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('in redirect')
    this.router.navigateByUrl('home')

  }

}
