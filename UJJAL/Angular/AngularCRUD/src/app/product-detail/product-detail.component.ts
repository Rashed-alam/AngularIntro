import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = { _id: null, prod_name: '', prod_desc: '', prod_price: null, updated_at: null };
  
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  //initially get the selected product
  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  //get the selected product details
  getProductDetails(id:any) {
    this.api.getProduct(id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product);
       
      });

  }

  //delete the product on delete button click
  deleteProduct(id) {
    
    this.api.deleteProduct(id)
      .subscribe(res => {
         
          this.router.navigate(['/products']);
        }, (err) => {
          console.log(err);
         
        }
      );
  }


}
