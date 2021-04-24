import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent implements OnInit {

  @Input() user = {} as User;

  constructor(private modal : NgbActiveModal) { }

   //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
  }

  dismiss(){
    this.modal.dismiss()
  }

  confirm(){
    this.modal.close()
  }
}
