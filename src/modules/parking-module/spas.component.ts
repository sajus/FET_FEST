import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'spas-app',
  templateUrl: './spas.component.html',
  styleUrls: ['./spas.component.scss']
})
export class SpasComponent {

    label_name = 'Smart Parking assit system';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en-US');
    this.translateService.use('en-US');
  }

}
