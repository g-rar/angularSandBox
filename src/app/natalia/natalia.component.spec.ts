import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NataliaComponent } from './natalia.component';

describe('NataliaComponent', () => {
  let component: NataliaComponent;
  let fixture: ComponentFixture<NataliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NataliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NataliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
