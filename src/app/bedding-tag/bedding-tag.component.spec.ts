import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeddingTagComponent } from './bedding-tag.component';

describe('BeddingTagComponent', () => {
  let component: BeddingTagComponent;
  let fixture: ComponentFixture<BeddingTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeddingTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeddingTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
