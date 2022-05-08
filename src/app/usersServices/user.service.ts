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
  /*signUp(email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }*/

  // Sign in with email/password
  /*login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }*/

  getUsuarios() {
    return this.firestore.collection<User>('users').snapshotChanges();
  }

  addNewUser(newId:string, name:string, email:string, averageGrade:string){
    this.firestore.collection("users").doc(newId)
      .set({name: name, email: email, averageGrade:averageGrade}).then (r =>{});
  }

}
