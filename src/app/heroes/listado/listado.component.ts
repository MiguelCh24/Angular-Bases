import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  heroes: string[] = [
    'Goku', 'Picoro', 'Vegeta', 'Krillin', 'Goham', 'Trunks'
  ]

  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';


  }

  sayans = [
    {
      nombre: "Seiya",
      signo: "Sagitario",
      poder: 20
    },
    {
      nombre: "Shiriu",
      signo: "Libra",
      poder: 23
    },
    {
      nombre: "Ikki",
      signo: "Sagitario",
      poder: 25
    },
    {
      nombre: "Hyoga",
      signo: "Acuario",
      poder: 20
    },
    {
      nombre: "Shun",
      signo: "Aries",
      poder: 19
    },
  ]

  constructor() { }



}
