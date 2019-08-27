import { Component, OnInit } from '@angular/core';
import { PriceCalculationService } from './../shared/price-calculation.service';

@Component({
  selector: 'app-price-archive',
  templateUrl: './price-archive.component.html',
  styleUrls: ['./price-archive.component.css']
})
export class PriceArchiveComponent implements OnInit {
allprice:any;
  constructor(private Pc:PriceCalculationService) { }

  ngOnInit() {
    this.getPrice();
  }

  getPrice() {
    this.Pc.getallprice().subscribe(
      (data) => {
        this.allprice = data;
        console.log(this.allprice);
      }
    );

  }
}
