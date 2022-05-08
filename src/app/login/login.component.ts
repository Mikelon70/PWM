import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from "../objects";
import { UserService } from "../usersServices/user.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm: FormGroup;
  RegisterForm: FormGroup;
  id: string = "";
  name: string = "";
  email: string = "";
  password: string = "";
  passwordRepeated: string = "";
  registered: number = 0;
  users!: User[];

  @Input() user!: User;

  constructor(public fb: FormBuilder, private userService: UserService, private router: Router,
              private firebaseAuth: AngularFireAuth) {
    this.checkoutForm = this.fb.group({
      id: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.RegisterForm = this.fb.group({
      id: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordRepeated: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.userService.getUsuarios()
      .subscribe(data => {
        this.users = data.map( e => {
          return {
            // @ts-ignore
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as User;
        })})
  }

  onSubmit(): void {
    this.id = this.checkoutForm.get('id')?.value;
    this.password = this.checkoutForm.get('password')?.value;
    if (!this.checkoutForm.valid) {
      window.alert("Es necesario rellenar todos los campos");
    } else {
      this.users.forEach((user) => {
        if (user.id == this.id){
          if (user.password == this.password){
            this.router.navigate(['']);
            window.alert("Sesión iniciada");
          } else {
            window.alert("Contraseña incorrecta");
          }
        }
      });

      /**if (Object.keys(this.users).find(this.RegisterForm.value.id)) {
        if (this.users[this.RegisterForm.value.id].password == this.RegisterForm.value.password) {
          this.router.navigate(['']);
        } else {
          window.alert("Contraseña incorrecta");
        }
      } else {
        window.alert("Usuario no registrado");
      }**/
    }
  }

  onSubmitRegister(): void {
    this.id = this.RegisterForm.get('id')?.value;
    this.email = this.RegisterForm.get('email')?.value;
    this.name = this.RegisterForm.get('name')?.value;
    this.password = this.RegisterForm.get('password')?.value;
    this.passwordRepeated = this.RegisterForm.get('passwordRepeated')?.value;

    if (!this.RegisterForm.valid){
      window.alert("Es necesario rellenar todos los campos o el formato de algún campo es incorrecto");
    }
    else{
      if(this.passwordRepeated != this.password)
      {
        window.alert("Las contraseñas deben coincidir. Por favor vuelva a intentarlo.");
      }
      else
      {
        this.users.forEach((user) => {
          if (user.id == this.RegisterForm.value.id){
            window.alert("Debe de escoger otro usuario, ya se encuentra registrado");
            this.registered = 1;
          }
        });
        if (this.registered != 1) {
          this.userService.addNewUser(this.RegisterForm.value.id, this.RegisterForm.value.name, this.RegisterForm.value.email, this.RegisterForm.value.password);
        }
      }
    }
  }
}
