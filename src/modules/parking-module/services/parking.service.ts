import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  parkings: any;
  bookings: any;
  users: any;
  constructor(private fireStore: AngularFirestore) {
    this.parkings = this.fireStore.collection('parkings').get();
    this.bookings = this.fireStore.collection('bookings').get();
    this.users = this.fireStore.collection('users').get();
  }

  /**
   * Gets a collection of parking locations from database
   */
  getParkingLocations() {
    return this.parkings;
  }

  /**
   * Gets a collection of bookngs from database
   */
  getBookings() {
    return this.bookings;
  }

  /**
   * Gets a collection of users from database
   */
  getUsers() {
    return this.users;
  }

  /**
   * Books a parking slot
   * @param bookingDetail
   */
  bookParkingSlot(bookingDetail: BookingDetails) {
    const slotDetail = {
      parkingId: bookingDetail.parkingId,
      userId: bookingDetail.userId,
      contact: bookingDetail.userContact,
      row: bookingDetail.row,
      column: bookingDetail.column,
      startTIme: bookingDetail.startTime,
      endTime: bookingDetail.endTime,
      status: bookingDetail.status,
      paymentStatus: 'P',
      amount: bookingDetail.amount,
      vehicleNo: bookingDetail.vehicleNo
    };
    this.bookings
      .doc(`${bookingDetail.parkingId}${slotDetail.row}${slotDetail.column}`)
      .set(slotDetail)
      .then(() => {
        this.parkings
          .doc(bookingDetail.parkingId)
          .get()
          .subscribe(data => {
            const detail = data.data();
            const available = parseInt(detail.available, 10);
            this.parkings
              .doc(bookingDetail.parkingId)
              .set({
                available: available - 1
              }, { merge: true }).
              then(() => {
                console.log('Booked successfully');
              });
          });
      });
  }

  /**
   * Gets a slot details
   * @param parkingId 
   * @param row 
   * @param column 
   */
  getSlotDetails(parkingId, row, column) {
    return this.bookings.doc(`${parkingId}${row}${column}`).get();
  }

  /**
   * Checks out from the parking and frees the slot
   * @param parkingId 
   * @param row 
   * @param column 
   */
  checkOut(parkingId, row, column) {
    this.bookings
      .doc(`${parkingId}${row}${column}`)
      .delete()
      .then(() => {
        this.parkings
          .doc(parkingId)
          .get()
          .subscribe(data => {
            const detail = data.data();
            const available = parseInt(detail.available, 10);
            this.parkings
              .doc(parkingId)
              .set({
                available: available + 1
              }, { merge: true }).
              then(() => {
                console.log("Checked out Successfully");
              });
          });
      });
  }
}
