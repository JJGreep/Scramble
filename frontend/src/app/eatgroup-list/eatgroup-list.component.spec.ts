import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatgroupListComponent } from './eatgroup-list.component';

describe('EatgroupListComponent', () => {
  let component: EatgroupListComponent;
  let fixture: ComponentFixture<EatgroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatgroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatgroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
