import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import {Eatgroup} from "./eatgroup";
import {CreateEatgroup} from "./createEatgroup";
import {Account} from "./account";

@Injectable({
  providedIn: 'root'
})


export class EatgroupService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Eatgroup[]> {
    return this.http.get<Eatgroup[]>("//localhost:8080/eat_groups/all?name=");
  }

  public getByName(name: string): Observable<Eatgroup[]> {
    return this.http.get<Eatgroup[]>("//localhost:8080/eat_groups/all?name=" + name);
  }


  public createEatGroup(createEatgroup: CreateEatgroup) {
    return this.http.post<Eatgroup>("//localhost:8080/eat_groups/createGroup", createEatgroup);
  }

  public updateEatGroup(updateEatgroup: Eatgroup) {
    console.log(JSON.stringify(updateEatgroup));
    console.log(updateEatgroup.name + " " +updateEatgroup.id);
    return this.http.put<Eatgroup>("//localhost:8080/eat_groups/updateGroup/" + updateEatgroup.id, updateEatgroup);
  }

  public deleteEatGroup(deleteEatgroup: Eatgroup) {
    console.log("Object deleteEatGroup in json: " + JSON.stringify(deleteEatgroup));
    return this.http.delete<Eatgroup>("//localhost:8080/eat_groups/deleteGroup/" + deleteEatgroup.id);
  }

  public getCurrentUserDetails(){
    var currentUser = window.localStorage.getItem('user');
    return this.http.get("//localhost:8080/accounts?userName=" + currentUser);
  }

  public getAllUsers(){
    return this.http.get<Account[]>("//localhost:8080/users/");
  }

  public getOneUser(name: string){
    return this.http.get<Account>("//localhost:8080/accounts?userName=" + name);
  }

}
