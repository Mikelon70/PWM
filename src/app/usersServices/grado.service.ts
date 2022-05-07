import { Injectable } from '@angular/core';
import {Grado} from "../objects";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class GradoService {

  /*constructor(private firestore: AngularFirestore) { }

  getGrados() {
    return this.firestore.collection<Grado>('grados').snapshotChanges();
  }*/


  gradosRef: AngularFireList<Grado>;
  private dbPath = '/grados';

  constructor(private db: AngularFireDatabase) {
    this.gradosRef = db.list(this.dbPath);
  }

  getGrados(): AngularFireList<Grado> {
    return this.gradosRef;
  }
}
