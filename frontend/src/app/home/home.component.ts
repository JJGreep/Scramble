import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Account } from '../_models/account';
import {AuthenticationService, UserService} from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentAccount: Account;
  accounts = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentAccount = this.authenticationService.currentAccountValue;
  }

  ngOnInit() {
    this.loadAllAccounts();
  }

  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllAccounts());
  }

  private loadAllAccounts() {
    this.userService.getAll()
      .pipe(first())
      .subscribe(accounts => this.accounts = accounts);
  }
}
