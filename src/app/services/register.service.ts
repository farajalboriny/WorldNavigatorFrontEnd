import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<User> {
    return this.httpClient.post<User>('http://add7134b963954b9795a24e649319f2c-1178710797.us-east-2.elb.amazonaws.com/register',user);
  }
}
