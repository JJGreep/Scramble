import { Component, OnInit } from '@angular/core';
import {element} from "protractor";
import {Restaurant} from "../Restaurant";

@Component({
  selector: 'app-find-restaurant',
  templateUrl: './find-restaurant.component.html',
  styleUrls: ['./find-restaurant.component.css']
})
export class FindRestaurantComponent implements OnInit {
restaurants: Restaurant[];

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

  }
}
