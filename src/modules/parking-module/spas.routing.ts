import { Routes, RouterModule } from "@angular/router";
import { SpasComponent } from './spas.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
    { path: '', component: SpasComponent }
];

export const SpasRouting: ModuleWithProviders = RouterModule.forChild(routes); 