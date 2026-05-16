import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-route-crear-page',
  imports: [RouterLink],
  template: `
    <article class="card">
      <h2>Crear</h2>
      <p>Se cumple con lo que se pide en actividad 2.</p>
      <a routerLink="/rutas">Volver</a>
    </article>
  `,
})
export class RouteCrearPage {}