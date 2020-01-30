import {HttpClient} from "@angular/common/http";
import {Account} from "./account";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient){

  }

  public updateAccount(account: Account){
    console.log(JSON.stringify(account));
    console.log(account.userName + " " + account.id);
    return this.http.put<Account>("//localhost:8080/accounts/updateAccount/" + account.id, account);
  }

  public deleteAccount(account: Account){
    console.log("Object account in json: " + JSON.stringify(account));
    return this.http.delete<Account>("//localhost:8080/accounts/deleteAccount/" + account.id);
  }
}
