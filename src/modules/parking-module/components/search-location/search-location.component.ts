import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements OnInit {
  
  searchForm: FormGroup;

  isSubmitted  =  false;

  constructor( private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.searchForm  =  this.formBuilder.group({
      location: ['', Validators.required],
      time: ['', Validators.required],
      endTime: ['', Validators.required]
  });
  }

  get formControls() { return this.searchForm.controls; }

  searchLocation() {
    this.isSubmitted = true;
    console.log(this.searchForm.value);
    if(this.searchForm.invalid){
      return;
    }
    //this.parkingService.searchLocation(this.searchForm.value);
    this.router.navigate(['spas/user/location-list']);
  }

}
