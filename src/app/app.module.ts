import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {NoticiasList} from "./otras-noticias/otras-noticias.component";
import { CajanoticiasComponent } from './cajanoticias/cajanoticias.component';
import { NoticiasdestacadasComponent } from './noticiasdestacadas/noticiasdestacadas.component';
import { EnlacesComponent } from './enlaces/enlaces.component';
import { AvisosComponent } from './avisos/avisos.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CajanoticiasComponent},
    ])
  ],
  declarations: [
    AppComponent,
    CajanoticiasComponent,
    NoticiasList,
    NoticiasdestacadasComponent,
    EnlacesComponent,
    AvisosComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
