import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRegistrationComponent } from './location-registration.component';

describe('LocationRegistrationComponent', () => {
  let component: LocationRegistrationComponent;
  let fixture: ComponentFixture<LocationRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
