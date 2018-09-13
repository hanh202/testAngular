import { Component, OnInit } from '@angular/core';
import { gioHang } from '../gioHang';

@Component({
  selector: 'hlt-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor() {}
  cart: gioHang[] = [
    {
      id: 1,
      name: 'String',
      price: 32,
      imgUrl: 'String',
      gender: 'String',
      quantity: 4
    }
  ];

  ngOnInit() {
    console.log(this.cart);
  }
}
