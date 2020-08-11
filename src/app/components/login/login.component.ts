import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {User} from "../../classes/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user=new User();
   msg='';
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('USER')!=null){
      console.log(localStorage.getItem('USER'))
      this.router.navigate(['/game'])
    }
  }

  login() {
   this.loginService.login(this.user).subscribe(
     data =>{console.log("response received")
       localStorage.setItem('USER', this.user.username);
       localStorage.setItem('Logged','true');
     this.router.navigate(['/game'])
     },
     error =>{console.log("exception occurred")
      this.msg='Bad credentials ,make sure to register if you dont have an account '
     }
   )

  }

  routeToRegistration() {
    this.router.navigate(['/registration'])
  }

}
