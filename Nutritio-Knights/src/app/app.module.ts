import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from 'src/environments/environment';
import { NavBarComponent } from './common/header/nav-bar/nav-bar.component';
import { AuthComponent } from './user/auth/auth.component';
import { QuestionnaireComponent } from './healthinfo/questionnaire/questionnaire.component';
import { TargetcalorieCalculateComponent } from './targetcalorie/targetcalorie-calculate/targetcalorie-calculate.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './common/home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    QuestionnaireComponent,
    TargetcalorieCalculateComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // added after importing http client module
    FormsModule//imported form module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
