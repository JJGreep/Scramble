import {HttpClient} from "@angular/common/http";
import {AccountTr} from "./AccountTr";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(private http: HttpClient){

  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getUser():Observable<AccountTr[]>{
    return this.http.get<AccountTr[]>("http://localhost:8080/accounts?userName=" + window.localStorage.getItem('user'));
  }

  public updateAccount(account: AccountTr){
    console.log(JSON.stringify(account));
    console.log(account.userName + " " + account.id);
    return this.http.put<AccountTr>("//localhost:8080/accounts/updateAccount/" + account.id, account);
  }

  public deleteAccount(account: AccountTr){
    console.log("Object account in json: " + JSON.stringify(account));
    return this.http.delete<AccountTr>("//localhost:8080/accounts/deleteAccount/" + account.id);
  }
}
