import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, config, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { Account } from '../_models/account';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private apiUrl: String = "http://localhost:8080";
  private currentUserSubject: BehaviorSubject<Account>;
  public currentUser: Observable<Account>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('currentAccount')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentAccountValue(): Account {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post<any>(`${this.apiUrl}/accounts/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentAccount', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentAccount');
    this.currentUserSubject.next(null);
  }
}
