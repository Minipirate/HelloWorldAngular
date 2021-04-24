import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  service: any;
  user: any;

  constructor() { }

   //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
  }

  login(form: NgForm) {
    console.log('form', form.value);

    if (form.valid) {
      this.service.findByEmail(form.value).subscribe((res: any) => {
        console.log(res);
        this.user = res
        console.log(this.user);
        if (res.length === 0) {
          console.log("error");
        }
        if (res.length > 0) {
          console.log("email okay");
        }
      })
    }
  }
}
