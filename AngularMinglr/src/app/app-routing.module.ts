import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalfeedComponent } from './globalfeed/globalfeed.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'register', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path: 'globalfeed', component: GlobalfeedComponent}

];

export const routingComponents =[RegistrationComponent,LoginComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
