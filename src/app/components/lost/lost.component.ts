import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  routToLogin() {
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
