import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common'; //date time formation control
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  
  productForm: FormGroup;
  gid:any;
  datetime:boolean = false;
  // prod_name:string='';
  // prod_desc:string='';
  // prod_price:number=null;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_name' : [null, Validators.required],
      'prod_desc' : [null, Validators.required],
      'prod_price' : [null, Validators.required],
      'updated_at' : [null]
    });
  }

  getProduct(id) {
    let date = formatDate(new Date(), "dd-MM-yyyy",'en');
    console.log(date);
    this.api.getProduct(id).subscribe(data => {
      this.gid = data._id;
      this.productForm.setValue({
        prod_name: data.prod_name,
        prod_desc: data.prod_desc,
        prod_price: data.prod_price,
        updated_at : date //formating date accoding requirements
      });
    });
  }

  onFormSubmit(form:any) {
   
    this.api.updateProduct(this.gid, form)
      .subscribe(res => {
          let Id = res['_id'];
          this.router.navigate(['/product-details', Id]);
        }, (err) => {
          console.log(err);
        
        }
      );
  }

  productDetails() {
    this.router.navigate(['/product-details', this.gid]);
  }
}
