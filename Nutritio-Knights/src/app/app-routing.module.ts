import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './healthinfo/questionnaire/questionnaire.component';
import { TargetcalorieCalculateComponent } from './targetcalorie/targetcalorie-calculate/targetcalorie-calculate.component';
import { HomePageComponent } from './common/home-page/home-page.component';
const routes: Routes = [

  {
    path: 'healthinfo',
    component: QuestionnaireComponent
  },
  {
    path: 'calculate/targetcalorie',
    component: TargetcalorieCalculateComponent
  },
  
  {
    path: "home", 
    component: HomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
