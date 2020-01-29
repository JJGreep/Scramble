import { Injectable } from '@angular/core';
import {Observable, throwError, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Restaurant} from "./restaurant";
import {catchError, retry, } from "rxjs/operators";
import {Filter} from './Filter'

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiURL: string = "http://localhost:8080/res";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  public getRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.apiURL).pipe(retry(1), catchError(this.handleError))

  }

  public getFilteredRestaurants(filter: Filter): Observable<Restaurant[]>{
    return //this.httpClient.get<Restaurant[]>(this.apiURL + "/" + filter.cityId + "/" + filter.cuisines + "/" + filter.radius)
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



  constructor(private httpClient: HttpClient) { }
}
