import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.sass']
})
export class MyCartComponent implements OnInit {
  items;
  constructor(private cartService: CartService) { }

  ngOnInit() {
  	 this.items = this.cartService.getItems();
  }

}
