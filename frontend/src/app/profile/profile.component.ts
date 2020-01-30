import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Account} from "../account";
import {AccountService} from "../account.service";

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

  @Input()
  profilename: string;

  profile: Account;

  editingAccount: boolean = false;

  constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute) {
    this.profile = window.localStorage.getItem();
    this.route.paramMap.subscribe(paramMap => {
      this.profile.userName = paramMap.get("profilename");
      this.profile.id = Number(paramMap.get("profileid"));
    })
  }

  ngOnInit() {
    this.editingAccount = false;
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
