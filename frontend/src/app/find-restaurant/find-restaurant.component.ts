import { Component, OnInit } from '@angular/core';

import {element} from "protractor";
import {MockRestaurant} from "../mockRestaurant";
import { ResRestaurants } from '../res-restaurants';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Filter} from "../Filter";


@Component({
  selector: 'app-find-restaurant',
  templateUrl: './find-restaurant.component.html',
  styleUrls: ['./find-restaurant.component.css']
})
export class FindRestaurantComponent implements OnInit {

restaurants: MockRestaurant[];

  private results: Array<ResRestaurants>;
  private http: HttpClient;
  private filter: Filter;

  constructor(filter: Filter) {
  }

  ngOnInit() {

    this.filter.lat = 42.054026;
    this.filter.lon = -72.447066;
    this.filter.count= 10;
    this.filter.cuisines= "";
    this.filter.radius= 1000;
    this.filter.start= 0;



    const body = {filter: this.filter}
    console.log(body);
    return this.http.post<ResRestaurants[]>('http://localhost:8080/res', body,)

    return this.http.get<ResRestaurants[]>('http://localhost:8080/res/filter').subscribe(data => {
      console.log(data);
      this.results = data; });
  }


}
