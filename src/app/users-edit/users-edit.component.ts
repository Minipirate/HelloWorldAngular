import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/users';
import { ToastrService } from 'ngx-toastr';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-users-edit', //Angular place la vue à l'intérieur du sélecteur app-edit
  templateUrl: './users-edit.component.html', //Le modèle html qui définit notre vue
  styleUrls: ['./users-edit.component.css'] //les styles CSS dont le composant a besoin
})
export class UsersEditComponent implements OnInit {

  user = {} as User
  natIdValide: boolean = true
  emailValide: boolean = true

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private toastr: ToastrService, private router: Router) { } //ActivatedRoute -> pour accéder au param de l'url

   //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
    this.populateUser()
  }

  populateUser() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.findById(params.id).subscribe(res => {
        this.user = res
        console.log("this.user", this.user);
      })
    })
  }

  updateUser() {
    if (!this.user.natID) {
      this.natIdValide = false
      this.toastr.error('User modify error with natID !')
    }
    if (!this.user.email) {
      this.emailValide = false
      this.toastr.error('User modify error with email !')
    }
    if (this.natIdValide && this.emailValide) {
      this.userService.update(this.user).subscribe(res => {
        console.log("res", res);
        this.toastr.success('User modify success !')
        setTimeout(() => this.router.navigate(['users']), 1000);
      })
    }
  }
}