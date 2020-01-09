import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantService } from "../restaurant.service"
import {Restaurant} from "../restaurant";

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {

  Restaurants: any = [];
  constructor( public restaurantService: RestaurantService) { }

  ngOnInit() {
      this.loadRestaurants();
  }

  public checkImg(restaurants: Restaurant[]) {

    for (let restaurant of restaurants) {
      if (restaurant.photo_url == ""){
        restaurant.photo_url ="assets/image/noimg.png";
      }
    }
  }
  public loadRestaurants() {
    return this.restaurantService.getRestaurants().subscribe((data: {}) => {
      this.Restaurants = data;
      this.checkImg(this.Restaurants);
    })
  }
}
