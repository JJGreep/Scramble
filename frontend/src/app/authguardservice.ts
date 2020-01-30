import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { ApiService } from './api.service';
import { Router} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private apiService : ApiService, private router: Router) {};

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
                      if (this.apiService.authenticated) {
                        return true;
                      }
                      else {
                        this.router.navigate(["/login"]);
                        return false;
                      }
  }
}
