import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantlistpageComponent } from './restaurantlistpage.component';

describe('RestaurantlistpageComponent', () => {
  let component: RestaurantlistpageComponent;
  let fixture: ComponentFixture<RestaurantlistpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantlistpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantlistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
