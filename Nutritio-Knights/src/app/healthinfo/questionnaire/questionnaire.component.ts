import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Healthinfo } from 'src/app/models/healthinfo';
import { HealthinfoService } from 'src/app/services/healthinfo.service';

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  // constructor(private healthinfoService: HealthinfoService, private router: Router) { }

  displayFormSubmitError: boolean = false;

  // healthinfo: Healthinfo = {
  //   username: '',
  //   firstname: '',
  //   lastname: '',
  //   age: 0,
  //   sex: '',
  //   currentweight:0,
  //   height:0,
  //   dietplan:'',
  //   howmuchlose:0,

  // };

  // placeholders = { //placeholders for fields
  //   username: 'username',
  //   firstname: 'firstname',
  //   lastname: 'lastname',
  //   age: 'age',
  //   sex: 'sex',
  //   currentweight:'Ibs.',
  //   height:'cm',
    // dietplan:'dietplan',
    // howmuchlose:'how much lose or gain',
    // targetcal:'targetcal',

  // };

  ngOnInit(): void {
  }
// I don't have this in my form
  // processForm(newRestoForm: NgForm) {
  //   if (newRestoForm.form.status === 'VALID') { //if this restaurant form is valid
  //     this.restoService.createNewRestaurant(this.restaurant); //dependency injection
  //     this.router.navigateByUrl('/restaurant');//redirecting them after they submit. navigating them back to restaurants
  //   } else {
  //     this.displayFormSubmitError = true; // if not correct that means there is an error in the form
  //   }
  // }

}
