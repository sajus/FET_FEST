import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,FormsModule, FormGroupDirective, NgForm, Validators,AbstractControl,ValidatorFn,NG_VALIDATORS} from '@angular/forms';
import { Router} from "@angular/router";
import { DataService} from "../../services/data.service";

export interface BloodGroups {
  value: string;
  viewValue: string;
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'MobPattern': {value: control.value}} : null;
  };
}


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
userRegisterForm: FormGroup;
  unamePattern = /^[6-9]\d{9}$/;
  bloodGroups: BloodGroups[] = [
    {value: 'A+', viewValue: 'A+'},
    {value: 'A-', viewValue: 'A-'},
    {value: 'B+', viewValue: 'B+'},
    {value: 'B-', viewValue: 'B-'},
    {value: 'O+', viewValue: 'O+'},
    {value: 'O-', viewValue: 'O-'},
    {value: 'AB+', viewValue: 'AB+'},
    {value: 'AB-', viewValue: 'AB-'},
    
  ];
  constructor(
    private fb: FormBuilder,
    private dataDervice:DataService,
    private router :Router
  ) {
  //let  unamePattern = "^[6-9]\d{9}$";
    this.userRegisterForm = fb.group({  
      'userName' : [null, Validators.required],
      'mobileNo' : [null, [Validators.required,Validators.pattern(this.unamePattern)]],
      'bloodGroup' : [null, Validators.required],
      'weight' : [null, Validators.required],
      'age' : [null, Validators.required],
    });  
  
   }

  ngOnInit() {
  }

  submit_userRegister(form){
    let self = form;
    if(self.valid){
      console.log(self.value);
      this.router.navigate(['/locationRegister'])
      this.dataDervice.setTempData(self.value);
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

}
