import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  lado: number = 4;

  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 18000
    },
    {
      nombre: 'Vegeta',
      poder: 17999
    }
  ]

  nuevo: Personaje = {
    nombre: "Maestro Roshe",
    poder: 1230
  }

}
