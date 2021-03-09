import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Price } from '../models/price';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Price[] = [];
  waiting: boolean = true;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    let observable: Observable<Price[]> = this.cartService.getShippingPrices();

    observable.pipe(delay(5000)).subscribe(response => {
      this.shippingCosts = response;
      this.waiting = false;
    });
  }

}
