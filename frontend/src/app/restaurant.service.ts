import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { Restaurant} from "./Restaurant";
import { RESTAURANTS} from "./Mock-restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  getRestaurants(): Observable<Restaurant[]> {
    return of(RESTAURANTS);
  }

  getRestaurant(id: number): Observable<Restaurant> {
    return of(RESTAURANTS.find( restaurant => restaurant.id === id));
  }

  constructor() { }
}
