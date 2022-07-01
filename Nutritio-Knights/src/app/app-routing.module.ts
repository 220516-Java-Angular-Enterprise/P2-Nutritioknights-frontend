import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { MainComponent } from './common/main/main.component';
import { QuestionnairComponent } from './user/questionnair/questionnair.component';
import { JournalComponent } from './journal/journal.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { UserHomeComponent } from './common/home-page/user-home/user-home.component';
import { FightComponent } from './fight/fight.component';
import { FightUserComponent } from './fight/fight-user/fight-user.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserAvatarComponent } from './avatar/user-avatar/user-avatar.component';
import { JournalUserComponent } from './journal/journal-user/journal-user.component';


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
    path: "fight/:username",
    component: FightUserComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "avatar",
    component: AvatarComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "avatar/:username",
    component: UserAvatarComponent,
    canActivate: [AuthGuard]
  },

  {
    path: "journal/:username",
    component: JournalUserComponent,
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
