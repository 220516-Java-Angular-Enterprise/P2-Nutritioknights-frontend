import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { MainComponent } from './common/main/main.component';
import { QuestionnairComponent } from './user/questionnair/questionnair.component';

const routes: Routes = [

  {
    path: "home", 
    component: HomePageComponent
  },

  {
    path: "NutritioKnights", 
    component: MainComponent
  },

  {
    path: "Questionnair",
    component: QuestionnairComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
