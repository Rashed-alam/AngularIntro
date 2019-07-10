import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder,FormGroup,Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  prod_name:string='';
  prod_desc:string='';
  prod_price:number=null;
  updated_at:Date=null;

  constructor(private router:Router, private api: ApiService, private fb:FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      'prod_name':[null],
      'prod_desc':[null],
      'prod_price':[null],
      'updated_at': [null]    
    });
  }

  onFormSubmit(form:any) {                    
    this.api.addProduct(form)       //sending the list
        .subscribe(res =>{          //subscrining to apiservices
          let id = res['id'];       //assigning result id to loaca id
          this.router.navigate(['/product-details/'+id]);
        }, (err) => {
          console.log(err);
        });
  }

}
