import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { UserInfo } from '../models/userinfo';
import { JournalService } from '../services/journal.service';
import { UserInfoService } from '../services/user-info.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  
  constructor(private auth: AuthService, private userInfoService: UserInfoService, private router: Router) { }

  user: any = {}

  userInfo:UserInfo = {} as UserInfo

  ngOnInit(): void {

    this.auth.user$.subscribe(u => {
      this.user = u;
      console.log(this.user.email);
      this.userInfoService.getUserInfoByEmail(this.user.email).then(r => {
        this.userInfo = r;
        this.router.navigateByUrl('journal/' + this.userInfo.username)

      }).catch(error => {
        this.router.navigateByUrl('')
      });

    })

 
  }

}
