import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
    { path: '', redirectTo: 'spas', pathMatch: 'full' },
    { path: 'spas', loadChildren: '../modules/parking-module/spas.module#SpasModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

