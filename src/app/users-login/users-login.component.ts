import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-users-login', //Angular place la vue à l'intérieur du sélecteur app-login
  templateUrl: './users-login.component.html', //Le modèle html qui définit notre vue
  styleUrls: ['./users-login.component.css'] //les styles CSS dont le composant a besoin
})
export class UsersLoginComponent implements OnInit {
  service: any;
  user: any;

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  showSuccess(email: string) {
    this.toastr.success('Connection succeed', 'You are now connected ' + email)
  }

  showError(email: string) {
    this.toastr.error('Error', 'No user for the input given : ' + email)
  }

  login(form: NgForm) {
    this.userService.findByEmail(form.value.email).subscribe(res => {
      if (res.length === 0) {
        this.showError(form.value.email)
      } else if (res.length > 0) {
        this.showSuccess(form.value.email)
        localStorage.setItem('token', res[0].email);

        setTimeout(() => {
          this.router.navigate(['user-list'])
        }, 700)
      }
    })
  }
}