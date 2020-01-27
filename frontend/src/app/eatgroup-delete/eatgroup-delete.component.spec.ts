import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatgroupDeleteComponent } from './eatgroup-delete.component';

describe('EatgroupDeleteComponent', () => {
  let component: EatgroupDeleteComponent;
  let fixture: ComponentFixture<EatgroupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatgroupDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatgroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
