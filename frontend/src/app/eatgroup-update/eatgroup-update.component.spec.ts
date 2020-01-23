import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatgroupUpdateComponent } from './eatgroup-update.component';

describe('EatgroupUpdateComponent', () => {
  let component: EatgroupUpdateComponent;
  let fixture: ComponentFixture<EatgroupUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatgroupUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatgroupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
