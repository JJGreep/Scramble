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
    this.eatgroupService.createEatGroup(this.createeatgroup).subscribe(result => this.gotoEatGroupList());
  }

  gotoEatGroupList(){
    this.router.navigate(['/eatgroup-list']);
  }
}

