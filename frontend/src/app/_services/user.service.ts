import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from "rxjs";

import { Account } from '../_models/account';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Account[]>(`${config.apiUrl}/accounts`);
  }

  register(account: Account) {
    return this.http.post(`${config.apiUrl}/accounts/register`, account);
  }

  delete(id: number) {
    return this.http.delete(`${config.apiUrl}/accounts/${id}`);
  }
}
