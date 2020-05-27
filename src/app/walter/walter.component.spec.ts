import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalterComponent } from './walter.component';

describe('WalterComponent', () => {
  let component: WalterComponent;
  let fixture: ComponentFixture<WalterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
