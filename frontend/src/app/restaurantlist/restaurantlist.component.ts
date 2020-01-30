import {Component, Input, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantService } from "../restaurant.service"
import {Restaurant} from "../restaurant";
import {Filter} from "../Filter";

let input = Input;

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  Restaurants: any = [];
  
  @Input()
  public f: Filter;
  constructor( public restaurantService: RestaurantService) { }

  ngOnInit() {
      console.log("reslist loaded")
      this.loadRestaurants();

  }

  public checkImg(restaurants: Restaurant[]) {

    for (let restaurant of restaurants) {
      if (restaurant.photo_url == ""){
        restaurant.photo_url ="assets/image/noimg.png";
      }
    }
  }

  public checkUrl(restaurants: Restaurant[]) {
    for (let restaurant of restaurants) {
      if (restaurant.url == ""){
        restaurant.url = "https://www.zomato.com";
      }
    }
  }

  public loadRestaurants() {
    return this.restaurantService.getRestaurants().subscribe((data: {}) => {
      this.Restaurants = data;
      this.checkImg(this.Restaurants);
      this.checkUrl(this.Restaurants);
    })
  }

  public loadFilteredRestaurants() {
      return this.restaurantService.getFilteredRestaurants(this.f).subscribe( (data: {}) => {
      this.Restaurants = data;
      this.checkImg(this.Restaurants);
      this.checkUrl(this.Restaurants);
    })
  }
}
