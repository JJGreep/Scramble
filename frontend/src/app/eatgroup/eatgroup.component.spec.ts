import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatgroupComponent } from './eatgroup.component';

describe('EatgroupComponent', () => {
  let component: EatgroupComponent;
  let fixture: ComponentFixture<EatgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
