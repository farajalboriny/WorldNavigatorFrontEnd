import {Injectable} from '@angular/core';
import {Requestresponse} from "../classes/requestresponse";
import {HttpClient} from "@angular/common/http";
import {Fetch} from "../classes/fetch";
import {Router} from "@angular/router";
import {Fight} from "../classes/fight";
import {Response} from "../classes/response";


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  requestResponse: Requestresponse
  fightInfo: Fight


  fetch(param: string) {
    this.requestResponse = new Requestresponse()
    this.requestResponse.command = param;
    this.requestResponse.userName = localStorage.getItem('USER');
    return this.httpClient.post<Fetch>('http://localhost:8080/fetch', this.requestResponse);
  }

  checkIfLost(fetch: Fetch) {
    if (fetch.lost) {
      localStorage.clear();
      this.router.navigate(['/lost'])
      localStorage.clear()
    }
  }

   fight(chosen: string) {
    this.fightInfo = new Fight()
    this.fightInfo.chosen = chosen
    this.fightInfo.userName = localStorage.getItem('USER')

     return this.httpClient.post<Response>('http://localhost:8080/fight', this.fightInfo);
  }


}