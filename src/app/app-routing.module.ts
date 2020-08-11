import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {GameComponent} from "./components/game/game.component";
import {LostComponent} from "./components/lost/lost.component";
import {WinningComponent} from "./components/winning/winning.component";




const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'game', component: GameComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'lost',component:LostComponent},
  {path:'winning',component:WinningComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
