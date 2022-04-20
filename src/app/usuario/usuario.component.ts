import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private usuarioId: Number,) {

  }
  ngOnInit(): void {
    //const routeParams = this.route.snapshot.paramMap;
    //const usuarioId = Number(routeParams.get("userID"));
    //this.usuarioId = usuarioId;

  }
  usuarioslist = this.http.get<{img:string, name:string, id: Number, asignaturas:any, tipo:string, notamedia: number, correo: string}[]>
  ('/assets/usuario.json');
}
