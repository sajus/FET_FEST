import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AppConstants  } from '../constants/appConstants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin':"*",
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  _baseURL : string;
  constructor(
    private httpClient:HttpClient,
    
    ) { 
      this._baseURL = AppConstants.baseURL;
    }

    userRegister(userRegister){
      return this.httpClient.post( this._baseURL+'/controller/api/v1/user/add ',userRegister,httpOptions)
        .pipe(map((response: any) => response ));
  
    }
}
