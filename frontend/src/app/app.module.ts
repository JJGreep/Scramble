import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FindRestaurantComponent } from './find-restaurant/find-restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FiltersComponent } from './filters/filters.component';
import { RestaurantlistpageComponent } from './restaurantlistpage/restaurantlistpage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EatgroupListComponent} from "./eatgroup-list/eatgroup-list.component";
import {EatgroupCreateComponent} from "./eatgroup-create/eatgroup-create.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FindRestaurantComponent,
    RestaurantDetailComponent,
    EatgroupListComponent,
    EatgroupCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
