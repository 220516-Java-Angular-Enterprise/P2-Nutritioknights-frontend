import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfo } from 'src/app/models/userinfo';
import { JournalService } from 'src/app/services/journal.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private journalService:JournalService, private currRouter: ActivatedRoute, private userInfoService: UserInfoService, private router: Router) { 
  }

  username: string = ''

  caloryTotal:number = 0
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
      this.calculateCalories(p['username'])
    })

    console.log(this.userinfo.fname)

  }
async calculateCalories(username:string){
  try{
    const todayFoods = await this.journalService.getUserEntriesByDatePretty(this.journalService.getDateInt(),username) 
    this.caloryTotal=todayFoods.reduce((accumulator, food) => {
      return accumulator + food.calories;
  },0)
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      }
    }
  }
}
