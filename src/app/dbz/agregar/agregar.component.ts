import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personaje: Personaje[] = []

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    console.log(this.nuevo)
    this.personaje.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
