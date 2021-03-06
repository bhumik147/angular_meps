import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePageComponent } from './RolePage.component';

describe('RolePageComponent', () => {
  let component: RolePageComponent;
  let fixture: ComponentFixture<RolePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
