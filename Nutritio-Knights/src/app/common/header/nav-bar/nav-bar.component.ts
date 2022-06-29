import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private currRouter: ActivatedRoute,private userInfoService: UserInfoService,private authService: AuthService) { }

  username: string = ''
  user: any  = {};

  showContent: boolean = false;

  ngOnInit(): void {

    this.authService.user$.subscribe(u => {
      this.user = u;

      this.userInfoService.getUserInfoByEmail(this.user.email).then(s =>{
        this.showContent = true;
      }).catch(error =>{
        this.showContent = false;
      })
    })




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

  toAvatar() {
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.router.navigateByUrl('avatar/' + this.username)
    })
  }
  

  dummy(){

  }

}
