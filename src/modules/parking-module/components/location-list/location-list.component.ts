import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

  constructor(private router: Router) { }
  locationList = [{name:'Parking 1'},{name:'Parking 3'},{name:'Parking 4'}]
  ngOnInit() {
  }

  viewLocationSlots(location){
    console.log(location);
    this.router.navigate(['spas/user/location-slots']);
  }
  
}
