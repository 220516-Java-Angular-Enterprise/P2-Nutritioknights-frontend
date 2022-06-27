import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { MainComponent } from './common/main/main.component';
import { QuestionnairComponent } from './user/questionnair/questionnair.component';

import { AuthGuard } from '@auth0/auth0-angular';
import { RedirectHomeComponent } from './common/redirect-home/redirect-home.component';

const routes: Routes = [
  {
    path: "", 
    component: MainComponent
  },

  {
    path: "home",
    component: HomePageComponent,
    
  },

  {
    path: "redirect-home",
    component: RedirectHomeComponent,

  },

  {
    path: "questionnair",
    component: QuestionnairComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "journal",
    component: JournalComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
