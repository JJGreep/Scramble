import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindRestaurantComponent } from './find-restaurant/find-restaurant.component';
import { GroupsComponent } from './groups/groups.component';
import {AuthGuard} from "./_helpers/auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-restaurant', component: FindRestaurantComponent},
  {path: 'groups', component: GroupsComponent},
  {path: '**', redirectTo: ''}
];

export const AppRoutingModule = RouterModule.forRoot(routes);

