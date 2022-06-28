import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'src/app/models/userinfo';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private currRouter: ActivatedRoute, private userInfoService: UserInfoService, private router: Router) { 
  }

  username: string = ''

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

  ngOnInit(): void {

    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.userInfoService.getUserInfoByUsername(this.username).then(user => {
        this.userinfo = user;
        console.log(user)

        if (this.userinfo === null) {
          this.router.navigateByUrl('home')
        }

      })
    })

    console.log(this.userinfo.fname)

  }

}
