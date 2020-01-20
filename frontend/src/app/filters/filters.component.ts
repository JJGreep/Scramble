import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterCheck} from "../FilterCheck";
import {Filter} from "../Filter";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() filterChecks: FilterCheck[] = [
     new FilterCheck(false,"Italian", 0), //55
     new FilterCheck(false,"Vegan", 1),
     new FilterCheck(false,"Halal", 2),
     new FilterCheck(false,"Seafood", 3),
     new FilterCheck(false,"Chinese", 4),
     new FilterCheck(false,"Sushi", 5)
   ];
  form: FormGroup = new FormGroup({
    checks: new FormControl(null)
  });
  sliderValue: number = 10;

  @Input() selectedValues: number[];
  @Output() toggle = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit() {console.log("filter loaded")
  }


  onchange(value){
    const checkedFilters = this.filterChecks.filter(x => x.checked);
    this.selectedValues = checkedFilters.map(x => x.cuisineId);

    this.toggle.emit(checkedFilters.map(x => x.cuisineId));
  }
}
