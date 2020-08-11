import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AlertModule} from "ngx-bootstrap/alert";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GameComponent} from './components/game/game.component';
import { LostComponent } from './components/lost/lost.component';
import { NgxPopper } from 'angular-popper';
import { WinningComponent } from './components/winning/winning.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    GameComponent,
    LostComponent,
    WinningComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
