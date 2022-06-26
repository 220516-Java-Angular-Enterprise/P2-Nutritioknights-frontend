import { Component, OnInit } from '@angular/core';
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
export class QuestionnairComponent implements OnInit {

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
    howmuchlose: 0,
  };

  ngOnInit(): void {

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
  processForm(newHealthForm: NgForm) {
    if (newHealthForm.form.status === 'VALID') { //if this restaurant form is valid
      // this.userInfoSerive.createNewquestionnaire(this.questionnaire); //dependency injection
      // this.router.navigateByUrl('/targetCalorie');//redirecting them after they submit. navigating them back to restaurants
    } else {
      this.displayFormSubmitError = true; // if not correct that means there is an error in the form
    }


}
}
     
       

    
  