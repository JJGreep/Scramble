import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterCheck} from "../FilterCheck";
import {Filter} from "../Filter";
import { FormGroup, FormControl } from '@angular/forms';
import {CuisineService} from "../cuisine.service";
import {Cuisine} from "../cuisine"
import {RestaurantlistComponent} from "../restaurantlist/restaurantlist.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() FilterChecks: FilterCheck[] = [
   ];



  form: FormGroup = new FormGroup({
    checks: new FormControl(null)
  });
  sliderValue: number = 10;

  @Input() selectedValues: String[];

  @Input()
  Cuisines: Cuisine[] = [];
  private fc: FilterCheck;
  idstring: string;


  f: Filter;
  i : number = 0;
  lat: number = 42.054026;
  lon: number = -72.557066;
  start: number = 0;
  count: number = 10;
  constructor(public cuisineService: CuisineService, private restaurantlist: RestaurantlistComponent) { }

  ngOnInit() {console.log("filter loaded");
    this.loadCuisines();
  }


  onchange(){
    const checkedFilters = this.FilterChecks.filter(x => x.checked);
    this.selectedValues = checkedFilters.map(x => x.cuisineId);
    checkedFilters.map(x => {this.idstring = this.idstring + x.cuisineId; console.log(this.idstring)});
    this.f = new Filter();
    this.f.radius = this.sliderValue;
    this.f.cuisines = this.idstring;
    console.log(this.f);
    // this.toggle.emit(this.f)
    }



  public loadCuisines() {

    this.cuisineService.getCuisines().subscribe((data: Cuisine[]) => {
      this.Cuisines = data;
      for (this.i; this.i < this.Cuisines.length; this.i++) {
        this.fc = new FilterCheck();
        this.fc.checked = false;
        this.fc.cuisine = this.Cuisines[this.i].cuisine_name;
        this.fc.cuisineId = this.Cuisines[this.i].cuisine_id;
        this.FilterChecks.push(this.fc);}
      });

      console.log(this.FilterChecks);
      return this.FilterChecks;



  }
  public onSubmit(){
    this.idstring = "";
    let result = this.FilterChecks.filter((ch) => { return ch.checked })
      .map((ch) => { this.idstring = ch.cuisineId;});
    console.log(this.idstring);
    this.f = new Filter();
    this.f.radius = this.sliderValue;
    this.f.cuisines = this.idstring;
    this.f.lat = this.lat;
    this.f.lon = this.lon;
    this.f.start = this.start;
    this.f.count = this.count;
    console.log(this.f);
    return this.restaurantlist.loadFilteredRestaurants(this.f);
  }
}
