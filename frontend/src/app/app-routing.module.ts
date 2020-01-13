import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindRestaurantComponent } from './find-restaurant/find-restaurant.component';
import { EatgroupListComponent} from "./eatgroup-list/eatgroup-list.component";
import { EatgroupCreateComponent} from "./eatgroup-create/eatgroup-create.component";
import {RestaurantlistpageComponent} from "./restaurantlistpage/restaurantlistpage.component";

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-restaurant', component: FindRestaurantComponent},
  {path: 'eatgroup-list', component: EatgroupListComponent},
  {path: 'eatgroup-create', component: EatgroupCreateComponent}
  {path: 'restaurants', component: RestaurantlistpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
