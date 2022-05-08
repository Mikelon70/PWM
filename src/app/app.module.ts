import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule , Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoticiasList } from "./otras-noticias/otras-noticias.component";
import { CajanoticiasComponent } from './cajanoticias/cajanoticias.component';
import { NoticiasdestacadasComponent } from './noticiasdestacadas/noticiasdestacadas.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AvisosComponent } from './avisos/avisos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { GradosComponent } from './grados/grados.component';
import { LoginComponent } from './login/login.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AsignaturasComponent } from './asignaturas/asignaturas.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', component: CajanoticiasComponent},
      {path: 'sobrenosotros', component: SobrenosotrosComponent},
      {path: 'grados', component: GradosComponent},
      {path: 'login', component: LoginComponent},
      {path: 'grado/:id', component: AsignaturasComponent},
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    CajanoticiasComponent,
    NoticiasList,
    NoticiasdestacadasComponent,
    EnlacesComponent,
    AvisosComponent,
    HeaderComponent,
    FooterComponent,
    SobrenosotrosComponent,
    GradosComponent,
    LoginComponent,
    AsignaturasComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
