import { Component, OnInit } from '@angular/core';
import { SpasDataService } from 'src/modules/parking-module/services/spas-data.service';
import { Router } from '@angular/router';
import { BookingData } from 'src/modules/parking-module/models/spas-booking-data';

@Component({
  selector: 'spas-booking',
  templateUrl: './spas-booking.component.html',
  styleUrls: ['./spas-booking.component.scss']
})
export class SpasBookingComponent implements OnInit {

  bookingData: BookingData;

  constructor(
    private spasDataService: SpasDataService,
    private router: Router
  ) {

    // should be input - user selection
    this.bookingData = new BookingData({
      area: 'kalyani nagar',
      parkingName: 'dmart parking 1',
      parkingId: '1',
      startTime: '10.00',
      endTime: '12.00',
      row: '2',
      column: '2'
    });
  }

  ngOnInit() {
  }

  /**
   * Saves user booking details and accepts payment and books slot for user
   * API call for booking data 
   */
  payNProceed() {
    console.log(this.bookingData);
    // fire Update request.
    const updateBookingDetails = {
      parkingId: this.bookingData.parkingId,
      userId: this.bookingData.userId,
      row: this.bookingData.row,
      column: this.bookingData.column,
      startTime: this.bookingData.startTime,
      endTime: this.bookingData.endTime,
      userContact: this.bookingData.userContact,
      status: this.bookingData.status,
      paymentStatus: this.bookingData.paymentStatus,
      amount: this.bookingData.amount,
      vehicleNo: this.bookingData.vehicleNo
    }
    this.spasDataService.storeCurrentBookingData(this.bookingData);

    this.router.navigate(['spas/bookingConfirmation']);
  }
}
