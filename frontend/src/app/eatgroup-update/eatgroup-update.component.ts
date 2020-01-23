import { Component, OnInit } from '@angular/core';
import {UpdateEatgroup} from "../updateEatgroup";
import {EatgroupService} from "../eatgroup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eatgroup-update',
  templateUrl: './eatgroup-update.component.html',
  styleUrls: ['./eatgroup-update.component.css']
})
export class EatgroupUpdateComponent implements OnInit {

  updateeatgroup: UpdateEatgroup;

  constructor(private eatgroupService: EatgroupService, private router: Router) {
    this.updateeatgroup = new UpdateEatgroup();
  }

  ngOnInit() {
  }

  onSubmit(){
    var regexcheck = /[^[a-zA-Z0-9-_ ]/gi;
    if (this.updateeatgroup.name == undefined)
    {
      console.log("No EatGroup name entered!");
    }
    else if (this.updateeatgroup.name.search(regexcheck) == -1) {
      if (this.updateeatgroup.name.length < 3) {
        console.log("EatGroup name is too short!");
      } else {
        this.eatgroupService.updateEatGroup(this.updateeatgroup).subscribe(result => this.gotoEatGroupList());
        console.log("Succesfully modified")
      }
    } else {
      console.log("Did not pass the regex check");
    }
  }

  gotoEatGroupList(){
    this.router.navigate(['/eatgroup-list']);
  }

}
