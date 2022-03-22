import { Component, OnInit } from '@angular/core';
import { HomeLayoutService } from '../Layouts/Home/home-layout.service';
import { ProductItemModel } from '../Vertical Card/product-item.model';

@Component({
  selector: 'dn-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public ps: HomeLayoutService) { }

  ngOnInit(): void {
  }

  addProduct(product : ProductItemModel) {
    console.log("You clicked add product.");
    console.log(product);
    this.ps.addProduct(product);
  }
}
