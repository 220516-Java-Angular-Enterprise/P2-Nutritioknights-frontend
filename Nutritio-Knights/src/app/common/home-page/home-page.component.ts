import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from 'src/app/models/userinfo';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService, private userInfoService: UserInfoService, private currRouter: ActivatedRoute, private router: Router) { }

  user: any = {}

  userinfo: UserInfo = {
    username: '',
    email: '',
    fname: '',
    lname: '',
    age: 0,
    sex: '',
    height: 0,
    currentWeight: 0,
    dietPlan: '',
    targetCals: 0
  }

  id: string = '';

  ngOnInit(): void {
    this.auth.user$.subscribe(u => {
      this.user = u;
      console.log(this.user.email);
      this.userInfoService.getUserInfoByEmail(this.user.email).then(r =>{
        this.userinfo=r;
        console.log(this.userinfo);
        
        this.router.navigateByUrl('home/' + this.userinfo.username)


      }).catch(error => {
        this.router.navigateByUrl('questionnair')
      });

    } )
  }

  private fetch$ = new BehaviorSubject<void>(undefined);

}
