import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatgroupCreateComponent } from './eatgroup-create.component';

describe('EatgroupCreateComponent', () => {
  let component: EatgroupCreateComponent;
  let fixture: ComponentFixture<EatgroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatgroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatgroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
