import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  private BloodGroup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  private Ranges = [5, 10, 15];
  private uploadData;

  constructor(private fb: FormBuilder, private requestService: RequestService, private router:Router) {
    this.requestForm = this.fb.group({
      fcBloodGroup: ['', Validators.required],
      fcAddress: ['', Validators.required],
      fcRanges: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onFileComplete(data: any) {
    this.uploadData = data;
    console.log(data); // We just print out data bubbled up from event emitter.
  }

  saveRequest(value) {
    let req = {
      "blood_group": "o+",
      "isPending": true,
      "status": {},
      "proof": "base64",
      "address_geopoint": {
          "_latitude": 19.45654747,
          "_longitude": 73.436456745
      },
      "address_text": "Sadar Hospital, Kalyani Nagar",
      "id": "fghfghjghkdfjth",				//Generate your own UUID at client side
      "mobile": "8984017346"
    }
    this.requestService.createRequest(req).subscribe(result => {
      this.router.navigate(['/home']);      
    }) 
  }
}
