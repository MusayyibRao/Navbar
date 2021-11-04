import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'register',component:RegisterPageComponent},
  {path:'login',component:LoginComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'home',component:HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
