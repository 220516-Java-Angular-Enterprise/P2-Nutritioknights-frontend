import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from 'src/environments/environment';
import { NavBarComponent } from './common/header/nav-bar/nav-bar.component';
import { AuthComponent } from './user/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
