import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-enlaces',
  templateUrl: './enlaces.component.html',
  styleUrls: ['./enlaces.component.css']
})
export class EnlacesComponent {

  constructor(private http: HttpClient) { }

  enlaceslist = this.http.get<{name:string}[]>
  ('/assets/enlaces.json');


}
