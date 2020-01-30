import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  authenticated() { return this.apiService.authenticated}

  ngOnInit() {
  }
  logOut(){
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    this.apiService.authenticated = false;
  }
}

