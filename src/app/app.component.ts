import { Component } from '@angular/core';

//Quand la classe est avec un @Component décorateur, il traite la classe comme Component
@Component({
  selector: 'app-root', //Angular place la vue à l'intérieur du sélecteur app-root
  templateUrl: './app.component.html', //Le modèle html qui définit notre vue
  styleUrls: ['./app.component.css'] //les styles CSS dont le composant a besoin
})
export class AppComponent {
}