import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //Import du composant racine
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersAddComponent } from './users-add/users-add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersLoginComponent } from './users-login/users-login.component';
import { EmailInterceptor } from './interceptor/http.interceptor';



//@NgModule comme décorateur de classe pour définir un module et fournir des métadonnées sur les modules
@NgModule({
  declarations: [ //tab de déclarations qui contient la liste des components, des pipes 
    AppComponent,
    HeaderComponent,
    ListComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersDeleteComponent,
    UsersLoginComponent,
    
  ],
  imports: [ //tab imports qui répertorie tous les modules externes requis
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), NgbModule // ToastrModule added
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : EmailInterceptor,
    multi : true
  }
  ], // tab providers pour enregistrer les services créés
  entryComponents : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
