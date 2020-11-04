import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-input',
  templateUrl: './numeric-input.component.html',
  styleUrls: ['./numeric-input.component.scss']
})
export class NumericInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() 
  quantity: number;
  
  @Input()
  max: number;

  @Output ()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity (): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity (): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
