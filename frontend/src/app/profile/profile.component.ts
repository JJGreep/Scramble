import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../account";
import {AccountService} from "../account.service";
import {Observable} from "rxjs";
import {AccountTr} from "../AccountTr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Favorites: any = [];
  History: any = [];

  @Input()
  profileid: number;
  profilename: string;
  profile: AccountTr;

  editingAccount: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {

  }

  ngOnInit() {
    this.editingAccount = false;
    this.loadUser();
    this.profileid = this.profile.id;
    this.profilename = this.profile.userName;
  }

  loadUser(){
    return this.accountService.getUser().subscribe((data) => {this.profile = data[0]})
  }


  editProfile(){
    this.editingAccount = true;
  }

 saveProfile(){
  this.accountService.updateAccount(this.profile);
  this.editingAccount = false;
 }

 deleteProfile(){
    if (confirm("Are you sure you want to delete your account? It will be lost forever.")) {
      this.accountService.deleteAccount(this.profile);
      this.router.navigate(['/home']);
    }
 }
}
