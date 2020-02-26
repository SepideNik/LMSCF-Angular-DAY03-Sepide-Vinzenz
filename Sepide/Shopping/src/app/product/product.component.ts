import { Component, OnInit } from '@angular/core';
import { products } from '../pets';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  pets = products;
  constructor() { }

  ngOnInit() {
  }

}
