import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersAddComponent } from './users-add/users-add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersLoginComponent } from './users-login/users-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    UsersAddComponent,
    UsersEditComponent,
    UsersDeleteComponent,
    UsersLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), NgbModule // ToastrModule added
  ],
  providers: [],
  entryComponents : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
