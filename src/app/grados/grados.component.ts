import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Grado } from '../objects'
import { GradoService} from "../usersServices/grado.service";
import {map} from "rxjs";

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {

  gradoslist?: Grado[]

  constructor(private gradeService: GradoService) {

  }

  ngOnInit() {
    /*this.gradeService.getGrados()
      .subscribe(data => {
        this.gradoslist = data.map( e => {
          return {
            // @ts-ignore
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Grado;
          })})*/

    this.gradeService.getGrados().snapshotChanges()
      .pipe( map(changes => changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val() }) ) ) )
      .subscribe(data => { this.gradoslist = data; });
  }
}
