import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../pets';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {	
  pet;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart() {
   window.alert('Your product has been added to the cart!');
   this.cartService.addToCart(this.pet);
  }

  ngOnInit(){
  	this.route.paramMap.subscribe(params => {
    this.pet = products[+params.get('id')];
  });
  }


}
