import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-winning',
  templateUrl: './winning.component.html',
  styleUrls: ['./winning.component.css']
})
export class WinningComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  routToLogin() {
    this.router.navigate(['login'])
  }
}
