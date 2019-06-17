/**
 * Angular Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpasComponent } from './spas.component';
import { SpasRouting } from './spas.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Module Imports
 */
import { createTranslateLoader } from 'src/app/app.module';
import { SpasBookingComponent } from './components/spas-booking/spas-booking.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationSlotsComponent } from './components/location-slots/location-slots.component';
import { SpasDataService } from 'src/modules/parking-module/services/spas-data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { SpasBookingSummaryComponent } from './components/spas-booking-summary/spas-booking-summary.component';

@NgModule({
  declarations: [
    SpasComponent,
    SpasBookingComponent,
    SearchLocationComponent,
    LocationListComponent,
    LocationSlotsComponent,
    SpasBookingSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpasRouting,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    SpasComponent
  ],
  providers: [
    SpasDataService,
    AngularFirestore
  ],
  bootstrap: [SpasComponent]
})
export class SpasModule { }
