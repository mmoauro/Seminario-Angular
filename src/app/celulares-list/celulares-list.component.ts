import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CelCartService } from '../cel-cart.service';
import { CelularesListService } from '../celulares-list.service';
import { Celular } from './Celular';

@Component({
  selector: 'app-celulares-list',
  templateUrl: './celulares-list.component.html',
  styleUrls: ['./celulares-list.component.scss']
})
export class CelularesListComponent implements OnInit {
  celulares: BehaviorSubject<Celular[]>;

  constructor(private cart: CelCartService, celulares: CelularesListService) {
    this.celulares = celulares.celulares;
   }

  addToCart (celular: Celular) {
    if (celular.quantity > 0) {
      this.cart.addToCart(celular);
      celular.stock -= celular.quantity;
      celular.quantity = 0;
    }
  }

  ngOnInit(): void {
  }

}
