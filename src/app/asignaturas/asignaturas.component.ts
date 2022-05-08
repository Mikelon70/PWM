import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Asignatura, Grado} from '../objects'
import { GradoService} from "../usersServices/grado.service";
import {map} from "rxjs";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  asignaturaslist?: Asignatura[];
  asignaturasGradolist?: number[];
  gradoId?: string;

  constructor(private gradeService: GradoService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    // @ts-ignore
    this.gradoId = this.route.snapshot.paramMap.get("id");

    // @ts-ignore
    this.asignaturasGradolist = this.gradeService.getAsignaturas(this.gradoId);

    // @ts-ignore
    this.gradeService.getAsignaturas(this.gradoId)
      .subscribe(data => {
        this.asignaturaslist = data.map( e => {
          return {
            // @ts-ignore
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Asignatura;
        })})
  }

}
