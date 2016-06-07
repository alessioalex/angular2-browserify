// import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app';
import { HTTP_PROVIDERS } from '@angular/http';

// enableProdMode();
bootstrap(AppComponent, [ HTTP_PROVIDERS ])
  .then(success => console.log())
  .catch(error => console.log(error));
