import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdPrintComponent } from './id-print.component';

describe('IdPrintComponent', () => {
  let component: IdPrintComponent;
  let fixture: ComponentFixture<IdPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
