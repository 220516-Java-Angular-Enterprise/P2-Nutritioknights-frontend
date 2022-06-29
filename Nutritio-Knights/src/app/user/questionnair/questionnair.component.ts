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
  sexes:Array<string>= ['Male','Female','Intersex'];
  currentSelectedSex:string = '';
  targetCals: number = 0;
  canCalTargetCalsError: boolean = false;

  getSelectedUserAccess() {
    console.log("Current Selected User", this.questionair.sex)
  }

  displayFormSubmitError:boolean = false;

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

  userinfoSend: UserInfo = {
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

  questionair: Questionair = {
    username: '',
    firstname: '',
    lastname: '',
    age: 0,
    sex: 'Sex',
    currentweight: 0,
    height: 0,
    dietplan: 'What is your diet plan?',
    howmuchlose: -1000,
  };

  validForm: boolean  = false;

  isValisForm() {
    if (this.questionair.sex === 'Sex' || this.questionair.dietplan === 'What is your diet plan?'){
      this.validForm = false;
    } else{
      this.validForm = true;
    }
  }

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

  calsWeightLoss: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("a change has happened")
    console.log(changes)
    this.questionair.username = this.questionair.username;
  }
  onChange(event: any) {
    this.calculateTargetCals(this.questionair.age, this.questionair.sex, this.questionair.currentweight, this.questionair.height, this.questionair.howmuchlose)
  };

  processForm(questionair: Questionair) {
    console.log('In process form')
    this.isValisForm()
    if (this.validForm && !this.canCalTargetCalsError) { //if this restaurant form is valid
      this.calculateTargetCals(this.questionair.age, this.questionair.sex, this.questionair.currentweight, this.questionair.height, this.questionair.howmuchlose)
      console.log(this.questionair.username)
      this.userinfoSend.username = this.questionair.username
      this.userinfoSend.fname = this.questionair.firstname
      this.userinfoSend.lname = this.questionair.lastname
      this.userinfoSend.email = this.user.email
      this.userinfoSend.age = this.questionair.age
      this.userinfoSend.sex = this.questionair.sex
      this.userinfoSend.height = this.questionair.height
      this.userinfoSend.currentWeight = this.questionair.currentweight
      this.userinfoSend.dietPlan = this.questionair.dietplan
      this.userinfoSend.targetCals = this.targetCals
      console.log(this.userinfoSend)
      this.userInfoSerive.createNewUserInfo(this.user.email, this.userinfoSend).then( s =>{
        this.router.navigateByUrl('home')
      }
      ); //dependency injection
      this.displayFormSubmitError = false;
      // have to fix redirect
      
    } else {
      this.displayFormSubmitError = true; // if not correct that means there is an error in the form
    }

  }


  calculateTargetCals(age: number, sex: string, currentweight: number, height: number, howmuchlose:number){

    console.log(age)

    if (age === 0 || age == null || sex === '' || currentweight === 0 || currentweight == null || height === 0 || height == null || howmuchlose === -1000){
      console.log('in here')
      this.canCalTargetCalsError = true;
      console.log(this.canCalTargetCalsError)
      return;

    }

    this.calsWeightLoss = (3500/7)*howmuchlose;

    if(sex == 'Male'){
      //BMR male
      console.log('in here')
      console.log(13.397 * currentweight + 4.799 * height - 5.677 * age + 88.362)
      this.canCalTargetCalsError = false;
      this.targetCals = Math.round(13.397*currentweight + 4.799*height - 5.677*age + 88.362 + this.calsWeightLoss);
      return;
    }
    if(sex == 'Female'){
      //BMR female
      this.canCalTargetCalsError = false;
      this.targetCals = Math.round(9.247 * currentweight + 3.098 * height - 4.330 * age + 447.593  + this.calsWeightLoss)
      return;
    } else{
      return;
      //BMR intersex
    }
  }


}
     
       

    
  