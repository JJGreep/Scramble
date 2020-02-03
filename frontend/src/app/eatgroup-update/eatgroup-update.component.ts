import {Component, Input, OnInit} from '@angular/core';
import {EatgroupService} from "../eatgroup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Eatgroup} from "../eatgroup";
import {Account} from "../account";
import {Observable} from "rxjs";

@Component({
  selector: 'app-eatgroup-update',
  templateUrl: './eatgroup-update.component.html',
  styleUrls: ['./eatgroup-update.component.css']
})

export class EatgroupUpdateComponent implements OnInit {
  eatgroups: Eatgroup[] = [];

  @Input() prefillid: number;
  prefillname: string;
  updateeatgroup: Eatgroup;
  membersObj: Account[];
  oneMember: Object = new Account();


  constructor(private eatgroupService: EatgroupService, private router: Router, private route: ActivatedRoute) {
    this.updateeatgroup = new Eatgroup();

    this.route.paramMap.subscribe(paramMap => {
      this.updateeatgroup.name = paramMap.get("prefillname");
      this.updateeatgroup.id = Number(paramMap.get("prefillid"));
    });

    // this.updateeatgroup.accounts.push(this.membersObj);


  }

  ngOnInit() {
    this.eatgroupService.getByName(this.updateeatgroup.name).subscribe((data) => {
      console.log("EatGroups", data);
      this.eatgroups = data;
    });
    this.eatgroupService.getAllUsers().subscribe((membersdata) => {
      // @ts-ignore
      this.membersObj = membersdata.result;
    });
  }


  onSubmit() {
    var regexcheck = /[^[a-zA-Z0-9-_ ]/gi;
    if (this.updateeatgroup.name == undefined) {
      console.log("No EatGroup name entered!");
    } else if (this.updateeatgroup.name.search(regexcheck) == -1) {
      if (this.updateeatgroup.name.length < 3) {
        console.log("EatGroup name is too short!");
      } else {
        console.log("In de component:" + this.updateeatgroup.name + " id: " + this.updateeatgroup.id)
        this.eatgroupService.updateEatGroup(this.updateeatgroup).subscribe(result => this.gotoEatGroupList());
        console.log("Succesfully updated")
      }
    } else {
      console.log("Did not pass the regex check");
    }
  }

  deleteGroup(name: string) {
    if (confirm("Are you sure you want to delete the EatGroup: " + name + "?")) {
      this.eatgroupService.deleteEatGroup(this.updateeatgroup).subscribe(result => this.gotoEatGroupList());
    }
  }

  gotoEatGroupList() {
    this.router.navigate(['/eatgroup-list']);
  }

  addMemberToAccounts() {
    // @ts-ignore
    //Get from select menu in html
    var memberToAdd = document.getElementById('addmember').value;
    console.log("membertoadd = " + memberToAdd);

    //Get the user object from api
    this.eatgroupService.getOneUser(memberToAdd).subscribe( (member) => {
      this.oneMember = member;
    });
    console.log("oneMember: " + JSON.stringify(this.oneMember));

    this.updateeatgroup.accounts = [];



    this.updateeatgroup.accounts.push.apply(this.oneMember);
    console.log("Accounts array: " + this.updateeatgroup.accounts);

  }

  deleteMember(name: string){
    if (confirm("Are you sure you want to delete " + name + " from this EatGroup?")) {
      console.log(name + " is deleted.")
    }
  }

}
