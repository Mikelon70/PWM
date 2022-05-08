import { Injectable } from '@angular/core';
import {Grado} from "../objects";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import {global} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  constructor(private firestore: AngularFirestore) { }

  getGrados() {
    return this.firestore.collection<Grado>('grados').snapshotChanges();
  }

  getAsignaturas(id: string) {
    let asignaturas: number[] = []
    this.firestore
      .collection('grados')
      .doc(id)
      .valueChanges()
      // @ts-ignore
      .subscribe((doc) => asignaturas = doc.asignaturas)

    return asignaturas;
  }

}
