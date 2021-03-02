import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const id: string|null = routeParams.get('productId');
    const productIdFromRoute: number = Number(id);

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
