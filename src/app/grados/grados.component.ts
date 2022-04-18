import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }
  gradoslist = this.http.get<{img:string, name:string, description:string}[]>
  ('/assets/grados.json');
}
