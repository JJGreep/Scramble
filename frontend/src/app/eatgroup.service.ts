import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {Eatgroup} from "./eatgroup";

@Injectable({
  providedIn: 'root'
})

export class EatgroupService {
  private httpOptions: any;

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Eatgroup[]> {
    return this.http.get<Eatgroup[]>("//localhost:8080/eatGroups");
  }

  public createEatGroup(eatgroupname){
    let body = JSON.stringify(eatgroupname);
    return this.http.post('//localhost:8080/eatGroups/', body, this.httpOptions);

  }
}
