import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserInfoService } from 'src/app/services/user-info.service';
import { UserInfo } from 'src/app/models/userinfo';
import { Router } from '@angular/router';
import { Questionair } from 'src/app/models/questionair';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-questionnair',
  templateUrl: './questionnair.component.html',
  styleUrls: ['./questionnair.component.css']
})
export class QuestionnairComponent implements OnInit, OnChanges {

  constructor(private auth: AuthService, private userInfoSerive: UserInfoService, private router: Router) { }

  user: any = {}
  displayFormSubmitError:boolean = false;

  userinfo: UserInfo = {
    username: '',
    email: '',
    fname: '',
    lname: '',
    age: 0,
    sex: '',
    height: 0,
    currentweight: 0,
    dietplan: '',
    targetcal: 0
  }

  questionair: Questionair = {
    username: '',
    firstname: '',
    lastname: '',
    age: 0,
    sex: '',
    currentweight: 0,
    height: 0,
    dietplan: '',
    howmuchlose: -1000,
  };

  ngOnInit(): void {

    console.log("in Init")

    this.auth.user$.subscribe(u =>{
      this.user = u;
      this.userInfoSerive.getUserInfoByEmail(this.user.email).then(r => {
        this.userinfo = r;
        // -------- Redierect if already done questionair

        if(this.userinfo !== null){
          this.router.navigateByUrl('home')
        }
        // --------- 
      })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("a change has happened")
    console.log(changes)
  }

  processForm(newHealthForm: NgForm) {
    if (newHealthForm.form.status === 'VALID') { //if this restaurant form is valid
      // this.userInfoSerive.createNewquestionnaire(this.questionnaire); //dependency injection
      // this.router.navigateByUrl('/targetCalorie');//redirecting them after they submit. navigating them back to restaurants
      this.displayFormSubmitError = false;
    } else {
      this.displayFormSubmitError = true; // if not correct that means there is an error in the form
    }
}

targetCals: number = 0;
canCalTargetCals: boolean = true;

  calculateTargetCals(age: number, sex: string, currentweight: number, height: number, howmuchlose:number){

    if(age=== 0 || sex === '' || currentweight === 0 || height === 0 || howmuchlose === -1000){
      this.canCalTargetCals = false;

    }

    if(sex == 'Male'){
      //BMR male
      this.targetCals = 13.397*currentweight + 4.799*height - 5.677*age + 88.362;
    }
    if(sex == 'Female'){
      //BMR female
      this.targetCals = 9.247*currentweight + 3.098*height - 4.330*age + 447.593

    } else{
      //BMR intersex
    }
  }


}
     
       

    
  