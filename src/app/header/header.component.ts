import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  //Méthode qui sert à initialiser des champs en récupérant des données de bdd
  ngOnInit(): void {
  }
}
