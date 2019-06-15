import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.scss']
})
export class SearchLocationComponent implements OnInit {
  
  searchForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm  =  this.formBuilder.group({
      location: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required]
  });
  }

  searchLocation() {
    
  }

}
