import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Requestresponse} from "../classes/requestresponse";
import {Response} from "../classes/response";

@Injectable({
  providedIn: 'root'
})
export class ExecuteCommandService {
  private requestResponse: Requestresponse;

  constructor(private httpClient: HttpClient) {
  }

  public execute(selectedQuantity: string): Observable<Response> {
    this.requestResponse = new Requestresponse()
    this.requestResponse.command = selectedQuantity;
    this.requestResponse.userName = localStorage.getItem('USER');
    return this.httpClient.post<Response>('http://3.129.208.173:8000/execute', this.requestResponse);
  }

  async quit(quit: string) {
    this.requestResponse = new Requestresponse()
    this.requestResponse.command = quit;
    this.requestResponse.userName = localStorage.getItem('USER');
    localStorage.removeItem('USER')
    localStorage.setItem('Logged', '')
    return await this.httpClient.post<Response>('http://3.129.208.173:8000/execute', this.requestResponse).toPromise();

  }

}
