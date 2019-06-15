import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'auth', loadChildren: "./auth/auth.module#AuthModule" },
  { path: 'admin', loadChildren: "./admin/admin.module#AdminModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutedComponents = [
  HomeComponent,
  DonateComponent
]
