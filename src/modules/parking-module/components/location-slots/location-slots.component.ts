import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-slots',
  templateUrl: './location-slots.component.html',
  styleUrls: ['./location-slots.component.scss']
})
export class LocationSlotsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSlotConfirmation() {
    this.router.navigate(['spas/slotConfirmation']);
  }

}
