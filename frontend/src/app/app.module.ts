import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindRestaurantComponent } from './find-restaurant/find-restaurant.component';
import { GroupsComponent } from './groups/groups.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import {HttpClientModule} from "@angular/common/http";
import { FiltersComponent } from './filters/filters.component';
import { RestaurantlistpageComponent } from './restaurantlistpage/restaurantlistpage.component';
import {FormsModule} from "@angular/forms";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FindRestaurantComponent,
    GroupsComponent,
    RestaurantDetailComponent,
    RestaurantComponent,
    RestaurantlistComponent,
    FiltersComponent,
    RestaurantlistpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
