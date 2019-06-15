import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public  tempData = new Subject();
 

  constructor() { }

  setTempData(data: any) {
    this.tempData = data;
  }
  getTestData() {
    return this.tempData;
  }
}