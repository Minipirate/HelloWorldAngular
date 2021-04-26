import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //Importation du module platformBrowserDynamic qui est un module responsable du chargement de l'appli Angular dans le navigateur

import { AppModule } from './app/app.module'; //Importation de l'AppModule, module racine de l'appli
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Le platformBrowserDynamic charge le module racine en invoquant le bootstrapModule et en lui donnant la référence à notre module racine AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
