import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EatgroupService} from "../eatgroup.service";
import {CreateEatgroup} from "../createEatgroup";

@Component({
  selector: 'app-eatgroup-create',
  templateUrl: './eatgroup-create.component.html',
  styleUrls: ['./eatgroup-create.component.css']
})
export class EatgroupCreateComponent implements OnInit {

  createeatgroup: CreateEatgroup;

  constructor(private eatgroupService: EatgroupService, private router: Router) {

    this.createeatgroup = new CreateEatgroup();
  }

  ngOnInit(){
  }

  onSubmit(){
    var regexcheck = /[^[a-zA-Z0-9-_ ]/gi;
    if (this.createeatgroup.name == undefined)
    {
      console.log("No EatGroup name entered!");
    }
    else if (this.createeatgroup.name.search(regexcheck) == -1) {
      if (this.createeatgroup.name.length < 3) {
        console.log("EatGroup name is too short!");
      } else {
        this.eatgroupService.createEatGroup(this.createeatgroup).subscribe(result => this.gotoEatGroupList());
        console.log("Succesfully created")
      }
    } else {
        console.log("Did not pass the regex check");
    }
  }

  gotoEatGroupList(){
    this.router.navigate(['/eatgroup-list']);
  }
}

