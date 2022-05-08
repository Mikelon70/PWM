import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../usersServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id="";


  constructor(
              public userService: UserService,
              private http: HttpClient,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  sendDetails(){
    //this.http.get('http://localhost:4200/usuarios/'+this.id);
    this.router.navigate(["/usuario/"+this.id]);
  }
}
