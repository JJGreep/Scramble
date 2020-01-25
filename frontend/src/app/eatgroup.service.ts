import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import {Eatgroup} from "./eatgroup";
import {CreateEatgroup} from "./createEatgroup";
import {UpdateEatgroup} from "./updateEatgroup";

@Injectable({
  providedIn: 'root'
})

export class EatgroupService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Eatgroup[]> {
    return this.http.get<Eatgroup[]>("//localhost:8080/eat_groups/all?name=");
  }

  public createEatGroup(createEatgroup: CreateEatgroup) {
    return this.http.post<Eatgroup>("//localhost:8080/eat_groups/createGroup", createEatgroup);
  }

  public updateEatGroup(updateEatgroup: UpdateEatgroup) {
    return this.http.post<Eatgroup>("//localhost:8080/eat_groups/updateGroup", updateEatgroup);
  }

}
