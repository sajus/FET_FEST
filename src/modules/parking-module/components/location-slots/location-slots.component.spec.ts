import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSlotsComponent } from './location-slots.component';

describe('LocationSlotsComponent', () => {
  let component: LocationSlotsComponent;
  let fixture: ComponentFixture<LocationSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
