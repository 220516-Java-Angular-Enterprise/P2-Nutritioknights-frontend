import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from 'src/environments/environment';
import { NavBarComponent } from './common/header/nav-bar/nav-bar.component';
import { AuthComponent } from './user/auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './common/main/main.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { QuestionnairComponent } from './user/questionnair/questionnair.component';
import { FormsModule } from '@angular/forms';
import { RedirectHomeComponent } from './common/redirect-home/redirect-home.component';
import { CacheService } from './cache-service';
import { CachingInterceptor } from './cache-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    MainComponent,
    HomePageComponent,
    QuestionnairComponent,
    RedirectHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    HttpClientModule,
    FormsModule

  ], 
  providers: [
    CacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
