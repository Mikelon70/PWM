import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-noticiasdestacadas',
  templateUrl: './noticiasdestacadas.component.html',
  styleUrls: ['./noticiasdestacadas.component.css']
})
export class NoticiasdestacadasComponent{

  constructor(private http: HttpClient) {

  }

  noticiasdesatacadaslist = this.http.get<{img:string}[]>
  ('/assets/noticias-destacadas.json');

}
