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
    return this.httpClient.post<User>('http://localhost:8080/register',user);
  }
}
