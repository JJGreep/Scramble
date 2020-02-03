import { Injectable } from '@angular/core';
import {Observable, throwError, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Restaurant} from "./restaurant";
import {catchError, retry, } from "rxjs/operators";
import {Filter} from './Filter'
import {Cuisine} from "./cuisine";
import {AccountTr} from "./AccountTr";

@Injectable({
  providedIn: 'root'
})

export class CuisineService{
  apiURL: string = "http://localhost:8080/cuisines";
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  public getCuisines():Observable<Cuisine[]>{
    return this.httpClient.get<Cuisine[]>(this.apiURL).pipe(retry(1), catchError(this.handleError))

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

  constructor(private httpClient: HttpClient) {
  }
}
