import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Celular } from './celulares-list/Celular';

@Injectable({
  providedIn: 'root'
})
/**
 * Este servicio tiene todos los celulares, para que si me cambio de pagina el stock no se reinicie.
 */
export class CelularesListService {
  celulares: BehaviorSubject<Celular[]> = new BehaviorSubject([
    {
      model: 'Mi A2',
      brand: 'Xiaomi',
      price: 23000,
      discount: false,
      stock: 17,
      quantity: 0,
    },
    {
      model: 'Iphone x',
      brand: 'Apple',
      price: 32000,
      discount: true,
      stock: 0,
      quantity: 0,
    },
  ]);

  constructor() { }
}
