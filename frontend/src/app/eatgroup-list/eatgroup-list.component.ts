import { Component, OnInit } from '@angular/core';
import { EatgroupService} from "../eatgroup.service";

@Component({
  selector: 'app-eatgroup-list',
  templateUrl: './eatgroup-list.component.html',
  styleUrls: ['./eatgroup-list.component.css']
})
export class EatgroupListComponent implements OnInit {
  eatgroups: any = [];

  constructor(public eatgroupService: EatgroupService) { }

  ngOnInit() {
    this.eatgroupService.getAll().subscribe((data:{}) => {
        console.log("EatGroups", data);
        this.eatgroups = data;
      }
    );
  }
}


