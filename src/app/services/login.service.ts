import { Injectable } from '@angular/core';
import {User} from "../classes/user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  public login(user:User):Observable<User>{
  return this.httpClient.post<User>('http://localhost:8080/login',user);
  }
}
