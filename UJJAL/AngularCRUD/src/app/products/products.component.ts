import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //public vraiables for products component
  data: Product[] = [];


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
 
      }, err => {
        console.log(err);
 
      });
  }

}
