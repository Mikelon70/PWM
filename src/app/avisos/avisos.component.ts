import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent {

  constructor(private http: HttpClient) { }

  avisoslist = this.http.get<{name:string}[]>
  ('/assets/avisos.json');

}
