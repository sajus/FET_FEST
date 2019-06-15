import { Injectable } from '@angular/core';
import { BookingData } from 'src/modules/parking-module/models/spas-booking-data';

@Injectable({
    providedIn: 'root',
})
export class SpasDataService {

    bookingDetails: BookingData;

    /**
     * Stores the current booking inforamation of user
     * @param bookingData: Holds booking details
     * @memberOf SpasDataService
     */
    storeCurrentBookingData(bookingData: BookingData) {
        this.bookingDetails = bookingData;
    }
}