/**
 * Angular imports
 */
import { Routes, RouterModule } from "@angular/router";
import { SpasComponent } from './spas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SpasBookingComponent } from 'src/modules/parking-module/components/spas-booking/spas-booking.component';
import { SpasBookingSummaryComponent } from 'src/modules/parking-module/components/spas-booking-summary/spas-booking-summary.component';

/**
 * Module Imports
 */
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationSlotsComponent } from './components/location-slots/location-slots.component';

const routes: Routes = [
    { path: '', component: SpasComponent },
    { path: 'user/search-location', component: SearchLocationComponent },
    { path: 'operator/search-location', component: SearchLocationComponent },
    { path: 'user/location-list', component: LocationListComponent },
    { path: 'user/location-slots', component: LocationSlotsComponent },
    { path: 'bookingConfirmation', component: SpasBookingSummaryComponent },
    { path: 'slotConfirmation', component: SpasBookingComponent }
];

export const SpasRouting: ModuleWithProviders = RouterModule.forChild(routes); 