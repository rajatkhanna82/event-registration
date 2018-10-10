import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageIdComponent } from './luggage-id.component';

describe('LuggageIdComponent', () => {
  let component: LuggageIdComponent;
  let fixture: ComponentFixture<LuggageIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuggageIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggageIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
