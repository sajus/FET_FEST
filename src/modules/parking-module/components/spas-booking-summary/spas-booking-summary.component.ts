import { Component, OnInit } from '@angular/core';
import { SpasDataService } from 'src/modules/parking-module/services/spas-data.service';

@Component({
  selector: 'spas-booking-summary',
  templateUrl: './spas-booking-summary.component.html',
  styleUrls: ['./spas-booking-summary.component.scss']
})
export class SpasBookingSummaryComponent implements OnInit {

  bookingSummary: any;
  checkoutFlag = false;

  constructor(private spasDataService: SpasDataService) {
    this.bookingSummary = spasDataService.getBookingData();
    this.bookingSummary.status = 'Booked';
  }

  ngOnInit() {

  }

  confirmCheckout() {
    this.checkoutFlag = true;
  }

}
