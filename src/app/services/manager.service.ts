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


  fetch() {
    this.requestResponse = new Requestresponse()
    this.requestResponse.command = '';
    this.requestResponse.userName = localStorage.getItem('USER');
    return this.httpClient.post<Fetch>('http://3.129.208.173:8000/fetch', this.requestResponse);
  }

  checkIfLost(fetch: Fetch) {
    if (localStorage.getItem('USER') != null) {
      if (fetch.lost) {
        localStorage.clear();
        this.router.navigate(['/lost'])
      }
    }
  }

  fight(chosen: string) {
    this.fightInfo = new Fight()
    this.fightInfo.chosen = chosen
    this.fightInfo.userName = localStorage.getItem('USER')

    return this.httpClient.post<Response>('3.129.208.173:8000/fight', this.fightInfo);
  }


}
