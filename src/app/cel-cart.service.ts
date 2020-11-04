import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Celular } from './celulares-list/Celular';

@Injectable({
  providedIn: 'root'
})
export class CelCartService {

  private _cartList: Celular[] = [];
  cartList: BehaviorSubject<Celular[]> = new BehaviorSubject([]);
  

  constructor() { }


  addToCart (celular: Celular) {
    let cel = this._cartList.find(c => celular.model == c.model);
    if (!cel) 
      this._cartList.push({... celular});
    else 
      cel.quantity += celular.quantity;
    
    this.cartList.next(this._cartList);
  }
}
