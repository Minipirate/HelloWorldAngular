import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/users';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-users-delete', //Angular place la vue à l'intérieur du sélecteur app-delete
  templateUrl: './users-delete.component.html', //Le modèle html qui définit notre vue
  styleUrls: ['./users-delete.component.css'] //les styles CSS dont le composant a besoin
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
