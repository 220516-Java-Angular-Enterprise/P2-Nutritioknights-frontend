import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private currRouter: ActivatedRoute) { }

  username: string = ''

  ngOnInit(): void {

  }

  toFight(){
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.router.navigateByUrl('fight/' + this.username)
    })
  }
  
  toJournal() {
    this.router.navigateByUrl('journal')
  }

  toHome() {
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.router.navigateByUrl('home/' + this.username)
    })
  }

  dummy(){

  }

}
