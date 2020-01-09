import { Injectable } from '@angular/core';
import {Observable, throwError, of} from "rxjs";
import { MockRestaurant} from "./mockRestaurant";
import { RESTAURANTS} from "./mock-restaurant";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Restaurant} from "./restaurant";
import {catchError, retry, } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  apiURL: string = "http://localhost:8080/res";

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

  public getRestaurants(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(this.apiURL).pipe(retry(1), catchError(this.handleError))

  }

  getMockedRestaurants(): Observable<MockRestaurant[]> {
    return of(RESTAURANTS);
  }

  getMockedRestaurant(id: number): Observable<MockRestaurant> {
    return of(RESTAURANTS.find( restaurant => restaurant.id === id));
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
