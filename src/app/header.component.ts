import { Component } from '@angular/core';

@Component({
  selector: 'head-app',
  templateUrl: './header.component.html',
  styleUrls: ['./app.component.css']
})
export class HeaderComponent {
  tituloHeader = 'Hola Mundo Header';
  /* aca va toda la lógica de negocio*/
}