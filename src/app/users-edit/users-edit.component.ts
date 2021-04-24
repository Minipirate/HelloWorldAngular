import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/users';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
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