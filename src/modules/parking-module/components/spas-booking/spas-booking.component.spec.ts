import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpasBookingComponent } from './spas-booking.component';

describe('SpasBookingComponent', () => {
  let component: SpasBookingComponent;
  let fixture: ComponentFixture<SpasBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpasBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpasBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
