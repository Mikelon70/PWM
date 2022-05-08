import {Injectable, Input} from '@angular/core';
import { User } from "../objects";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { doc, setDoc } from "firebase/firestore";
import { updateProfile } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  @Input() user!: User;

  constructor(private firebaseAuth: AngularFireAuth,private firestore: AngularFirestore) { }

  // Sign up with email/password
  signUp(email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign in with email/password
  login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  getUsuarios() {
    return this.firestore.collection<User>('users').snapshotChanges();
  }

  addNewUser(id:string, name:string, email:string, password:string){
    this.firestore.collection("users").doc(id)
      .set({name: name, email: email, password: password, type: "no matriculado", subjects: [], img: "https://firebasestorage.googleapis.com/v0/b/pruebafirebase-3d1a3.appspot.com/o/fotoAlumno.png?alt=media&token=620650c8-0457-4214-9521-ed73c62f9d6a"}).then (r =>{});
  }

}
