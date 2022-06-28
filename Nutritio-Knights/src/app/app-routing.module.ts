import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { MainComponent } from './common/main/main.component';
import { QuestionnairComponent } from './user/questionnair/questionnair.component';
import { JournalComponent } from './journal/journal.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { UserHomeComponent } from './common/home-page/user-home/user-home.component';
import { FightComponent } from './fight/fight.component';


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
    path: "home/:username",
    component: UserHomeComponent,
    canActivate: [AuthGuard]
  },


  {
    path: "questionnair",
    component: QuestionnairComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "fight",
    component: FightComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "journal",
    component: JournalComponent,
    canActivate: [AuthGuard]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
