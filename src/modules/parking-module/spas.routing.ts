/**
 * Angular imports
 */
import { Routes, RouterModule } from "@angular/router";
import { SpasComponent } from './spas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

/**
 * Module Imports
 */
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { LocationListComponent } from './components/location-list/location-list.component';

const routes: Routes = [
    { path: '', component: SpasComponent },
    { path: 'user/search-location', component: SearchLocationComponent },
    { path: 'operator/search-location', component: SearchLocationComponent },
    { path: 'locations', component: LocationListComponent }
];

export const SpasRouting: ModuleWithProviders = RouterModule.forChild(routes); 