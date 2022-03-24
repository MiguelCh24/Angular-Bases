import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personaje: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 18000
        },
        {
            nombre: 'Vegeta',
            poder: 17999
        }
    ]

    get personajes(): Personaje[] {
        return [...this._personaje]
    }

    constructor() { }

    agregarPersonaje(data: Personaje) {
        this._personaje.push(data)
    }
}