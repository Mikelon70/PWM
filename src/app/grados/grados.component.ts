import { Component, OnInit } from '@angular/core';
import { Grado } from '../objects'
import { GradoService} from "../usersServices/grado.service";
import firebase from "firebase/compat";

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent implements OnInit {

  gradoslist: Grado[] = []

  constructor(private gradeService: GradoService) {

  }

  ngOnInit() {

    this.gradeService.getGrados()
      .subscribe(data => {
        this.gradoslist = data.map( e => {
          return {
            // @ts-ignore
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Grado;
          })})
  }

}
