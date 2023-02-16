import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"


//this is dependency injection.
@Injectable({
  providedIn: 'root'
})


export class UserService {
  //create a private variable.
  //the url from the webiste/api from web.
  private url="https://randomuser.me/api"
  //inserting in the constructor.
  constructor(private http: HttpClient) { }

  //method for getting the user
  //the httpClient actually makes this an observable.
  //so returned back is observable.
  //so we can subscribe.
  getUser(){
    return this.http.get(this.url);
  }
}
