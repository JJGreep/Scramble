import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { EatGroup} from "./eat-group";
import { EATGROUPS} from "./Mock-eat-groups";

@Injectable({
  providedIn: 'root'
})
export class EatGroupsService {

  getEatGroups(): Observable<EatGroup[]> {
    return of(EATGROUPS);
  }

  getEatGroup(id: number): Observable<EatGroup> {
    return of(EATGROUPS).find( eatgroup => eatgroup.id === id)
  }

  constructor() { }
}
