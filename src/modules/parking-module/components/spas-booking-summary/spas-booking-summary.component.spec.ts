import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasBookingSummaryComponent } from './spas-booking-summary.component';

describe('SpasBookingSummaryComponent', () => {
  let component: SpasBookingSummaryComponent;
  let fixture: ComponentFixture<SpasBookingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpasBookingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpasBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
