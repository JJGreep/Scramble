import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EatGroupsComponent } from './eat-groups.component';

describe('GroupsComponent', () => {
  let component: EatGroupsComponent;
  let fixture: ComponentFixture<EatGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EatGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EatGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
