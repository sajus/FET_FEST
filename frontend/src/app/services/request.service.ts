import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = 'https://us-central1-digital-blood-bank-1c7f4.cloudfunctions.net';

  constructor(private http:HttpClient) { }

  createRequest(data){
    return this.http.post(this.url + '/controller/api/v1/request/add', data);
  }

}
