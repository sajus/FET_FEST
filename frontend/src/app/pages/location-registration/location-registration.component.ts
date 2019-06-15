import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,FormsModule, FormGroupDirective, NgForm, Validators,AbstractControl,ValidatorFn,NG_VALIDATORS} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router} from "@angular/router";
import { DataService} from '../../services/data.service';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-location-registration',
  templateUrl: './location-registration.component.html',
  styleUrls: ['./location-registration.component.css']
})
export class LocationRegistrationComponent implements OnInit {
locationRegisterForm: FormGroup;
  userRegData = {};
  currentLocationLatLng:any;


  constructor(
    private fb: FormBuilder,
    private dataService :DataService,
    private masterService :MasterService,
    private router : Router
  ) {
  
    this.locationRegisterForm = fb.group({  
      'location' : [null, Validators.required]    
    });  
   }

  ngOnInit() {
    this.userRegData =  this.dataService.getTestData();
  }
  submit_locationRegister (form){
    let self = form;
    if(self.valid && this.userRegData['userName']){
      if(this.currentLocationLatLng){
      console.log(self.value);  
     let tempData = {
       "name":this.userRegData['userName'],
       "mobile":this.userRegData['mobileNo'],
       "blood_group":this.userRegData['bloodGroup'],
       "permanent_address_geopoint":{
         "_latitude":this.currentLocationLatLng.coords.latitude,
         "_longitude":this.currentLocationLatLng.coords.latitude,
       },        
        "current_address_text":"",
        "permanent_address_text":"",
        "current_address_geopoint":{
         "_latitude":this.currentLocationLatLng.coords.latitude,
         "_longitude":this.currentLocationLatLng.coords.latitude,
       },
          "status": {},
     }
      localStorage.setItem('digiBloodUser', JSON.stringify(tempData));
      this.masterService.userRegister(tempData)
      .subscribe(resp=>{
        if(resp && resp.code == 201){
          let userData = JSON.parse(localStorage.getItem('digiBloodUser'));
          userData.docRefId = resp.data.docRefId;
           userData.currentPage = "/test";
          localStorage.setItem('digiBloodUser', JSON.stringify(userData));
         console.log("user register Sucessfully==================>",tempData);
          this.router.navigate(['/request'])
        }else{
           console.log("Error in add user====================>",resp);
        }
      
       
      },error=>{
        console.log("Error in add user====================>");
      });
      }

    }else{
      let elements = self.controls;
      for (var key in elements) {
        if (elements.hasOwnProperty(key)) {
          elements[key].touched = true;
          console.log(key + " -> " + elements[key]);
        }
      }
    }
    
  }
  findMyLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocationLatLng = position;
        console.log("Position",position);
       
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
