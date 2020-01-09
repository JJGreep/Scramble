import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {config} from "rxjs";

import { Account } from '../_models/account';



@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }
  private apiUrl: String = "http://localhost:8080";

  getAll() {
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
  }

  register(account: Account) {
    return this.http.post(`${this.apiUrl}/accounts/register`, account);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/accounts/${id}`);
  }
}
