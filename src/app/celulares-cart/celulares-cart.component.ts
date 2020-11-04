import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CelCartService } from '../cel-cart.service';
import { Celular } from '../celulares-list/Celular';

@Component({
  selector: 'app-celulares-cart',
  templateUrl: './celulares-cart.component.html',
  styleUrls: ['./celulares-cart.component.scss']
})
export class CelularesCartComponent implements OnInit {

  cartList$: Observable<Celular[]>;

  constructor(private cart: CelCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
