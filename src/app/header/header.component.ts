import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-header', //Angular place la vue à l'intérieur du sélecteur app-header
  templateUrl: './header.component.html', //modèle html qui définit notre vue
  styleUrls: ['./header.component.css'] //les styles CSS dont le composant a besoin
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token') //supp token du localStorage  
    setTimeout(() => this.router.navigate(['login']), 1000); //et faire une redirection vers la page login
  }
}
