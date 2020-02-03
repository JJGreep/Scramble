import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EatgroupService} from "../eatgroup.service";
import {CreateEatgroup} from "../createEatgroup";
import {Account} from "../account";

@Component({
  selector: 'app-eatgroup-create',
  templateUrl: './eatgroup-create.component.html',
  styleUrls: ['./eatgroup-create.component.css']
})
export class EatgroupCreateComponent implements OnInit {

  createeatgroup: CreateEatgroup;
  currentAccount: Account;

  constructor(private eatgroupService: EatgroupService, private router: Router) {

    this.createeatgroup = new CreateEatgroup();

    // this.currentAccount = new Account();
    // this.currentAccount.id = 600;
    // this.currentAccount.userName = "wdebitewari";
    // this.currentAccount.password = "JHGFD";
    // this.currentAccount.email = "wikash@debitewari.nl";

    // this.createeatgroup.accounts.push(t);
  }

  ngOnInit(){
  }

  onSubmit(){

    var regexcheck = /[^[a-zA-Z0-9-_ ]/gi;
    if (this.createeatgroup.name == undefined)
    {
      alert("No EatGroup name entered!");
    }
    else if (this.createeatgroup.name.search(regexcheck) == -1) {
      if (this.createeatgroup.name.length < 3) {
        alert("EatGroup name is too short! (min. 3 characters)");
      } else {
        this.eatgroupService.createEatGroup(this.createeatgroup).subscribe(result => this.gotoEatGroupList());
        alert("EatGroup name Succesfully created")
      }
    } else {
      alert("EatGroup name contains characters that arent't allowed.\n(use A - Z and/or numbers)");
    }
  }

  gotoEatGroupList(){
    this.router.navigate(['/eatgroup-list']);
  }



}
