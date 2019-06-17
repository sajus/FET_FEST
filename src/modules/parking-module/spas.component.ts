import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'spas-app',
  templateUrl: './spas.component.html',
  styleUrls: ['./spas.component.scss']
})
export class SpasComponent {

    label_name = 'Smart Parking assit system';
    routeName: string;

  constructor(
      private translateService: TranslateService,
      private router: Router
      ) {
    this.translateService.setDefaultLang('en-US');
    this.translateService.use('en-US');
    this.routeName = router.url; 
  }

}
