import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-otras-noticias',
  templateUrl: './otras-noticias.component.html',
  styleUrls: ['./otras-noticias.component.css']
})
export class NoticiasList {
  constructor(private http: HttpClient) {

  }
  share() {
    window.alert('The product has been shared!');
  }

  otrasnoticiaslist = this.http.get<{name:string, description:string}[]>
  ('/assets/otras-noticias.json');
}
