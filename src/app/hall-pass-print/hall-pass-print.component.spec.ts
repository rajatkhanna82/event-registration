import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallPassPrintComponent } from './hall-pass-print.component';

describe('HallPassPrintComponent', () => {
  let component: HallPassPrintComponent;
  let fixture: ComponentFixture<HallPassPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallPassPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallPassPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
