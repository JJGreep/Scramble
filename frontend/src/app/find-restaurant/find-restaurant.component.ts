import { Component, OnInit } from '@angular/core';

import {element} from "protractor";
import {MockRestaurant} from "../mockRestaurant";
import { ResRestaurants } from '../res-restaurants';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-find-restaurant',
  templateUrl: './find-restaurant.component.html',
  styleUrls: ['./find-restaurant.component.css']
})
export class FindRestaurantComponent implements OnInit {

restaurants: MockRestaurant[];

  private results: Array<ResRestaurants>;
  private http: HttpClient;


  constructor() {
  }

  ngOnInit() {

    // var elem = document.querySelector('input[type="range"]');
    //
    // var rangeValue = function () {
    //   var newValue = elem.value;
    //   var target = document.querySelector('.value');
    //   target.innerHTML = newValue;
    // }
    //
    // elem.addEventListener("input", rangeValue);


    return this.http.get<ResRestaurants[]>('http://localhost:8080/res').subscribe(data => {
      console.log(data);
      this.results = data; });
  }


}
