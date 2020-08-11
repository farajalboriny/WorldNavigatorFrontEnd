import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser = new User();
  confirmPass: string
  msg = '';

  constructor(private router: Router, private registerService: RegisterService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('USER') != null) {
      this.router.navigate(['/game'])
    }
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  register() {
    this.registerService.register(this.newUser).subscribe(
      data => {
        console.log("registration completed"),
        this.router.navigate(['/login'])
      },
      error => {
        console.log("exception occurred")
        this.msg = 'User name already taken'
      }
    )

  }
}
