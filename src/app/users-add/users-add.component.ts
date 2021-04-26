import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-users-add', //Angular place la vue à l'intérieur du sélecteur app-users-add
  templateUrl: './users-add.component.html', // Le modèle html qui définit notre vue
  styleUrls: ['./users-add.component.css'] //les styles CSS dont le composant a besoin
})
export class UsersAddComponent implements OnInit {

  constructor(private userService: UserService, private toastr: ToastrService, private router : Router) { }

   //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
  }

  saveUser(form: NgForm) {
    if(form.valid){
      this.userService.create(form.value).subscribe(() => {
      this.toastr.success('You will be redirected to users list', "User Created")
      })
      setTimeout(()=>                           
        this.router.navigate(['users'])
   , 3000);
    } else {
      this.toastr.error('Please fix the form errors and continue', "Form Errors")
    }
  }
}