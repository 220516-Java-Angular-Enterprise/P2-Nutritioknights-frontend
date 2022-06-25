import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './healthinfo/questionnaire/questionnaire.component';
import { TargetcalorieCalculateComponent } from './targetcalorie/targetcalorie-calculate/targetcalorie-calculate.component';
const routes: Routes = [

  {
    path: 'healthinfo',
    component: QuestionnaireComponent
  },
  {
    path: 'calculate/targetcalorie',
    component: TargetcalorieCalculateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
