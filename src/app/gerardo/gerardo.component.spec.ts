import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerardoComponent } from './gerardo.component';

describe('GerardoComponent', () => {
  let component: GerardoComponent;
  let fixture: ComponentFixture<GerardoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerardoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
