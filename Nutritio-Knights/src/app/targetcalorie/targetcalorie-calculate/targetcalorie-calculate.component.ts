import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targetcalorie-calculate',
  templateUrl: './targetcalorie-calculate.component.html',
  styleUrls: ['./targetcalorie-calculate.component.css']
})
export class TargetcalorieCalculateComponent implements OnInit {
  age:number;
  sex:string;
  height:number;
  currentweight:number;
  howmuchlose:number;


  constructor(age:number, sex: string, height: number, currentweight: number, howmuchlose:number) { 
  this.age=age;
  this.sex=sex;
  this.height=height;
  this.currentweight=currentweight;
  this.howmuchlose=howmuchlose;


  }

  
targetCalorieformen= (10 *currentweight) + (6.25 *height) - (5 *age)+5;
targetcaorieforwomen=(10 * currentweight) + (6.25 *height) - (5 × age ) - 161;


  ngOnInit(): void {
  }

}


