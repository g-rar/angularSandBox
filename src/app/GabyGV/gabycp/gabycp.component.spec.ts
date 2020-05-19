import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabycpComponent } from './gabycp.component';

describe('GabycpComponent', () => {
  let component: GabycpComponent;
  let fixture: ComponentFixture<GabycpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabycpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabycpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
