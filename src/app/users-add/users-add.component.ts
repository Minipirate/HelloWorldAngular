import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
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