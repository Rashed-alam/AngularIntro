import { Component, OnInit } from '@angular/core';
import { FabricCalulation } from './../shared/fabricEntry.model';
import { FabricEntryService } from './../shared/fabric-entry.service';
import { PriceCalculationService } from './../shared/price-calculation.service';

@Component({
  selector: 'app-preview-report',
  templateUrl: './preview-report.component.html',
  styleUrls: ['./preview-report.component.css']
})
export class PreviewReportComponent implements OnInit {
  allfab: any;
  allprice:any;
  a: any;
  setcurrency:any;


  constructor(public Fc: FabricEntryService,public Pc:PriceCalculationService) { }

  ngOnInit() {
    this.a = 27;
    this.getnewpost(this.a);
   this.getPrice();
  }
  buyername: any;
  getnewpost(a) {
    this.Fc.getAllFabricsEntry(a)
      .subscribe((data: FabricCalulation[]) => {
        this.allfab = data;
        console.log(this.allfab);
        this.Fc.currentFabricCalc.mailDate = this.allfab[0].mailDate;
        this.Fc.currentFabricCalc.entryDate = this.allfab[0].entryDate;
        this.Fc.currentFabricCalc.fabricEntry_id = this.allfab[0].fabricEntry_id;
        this.Fc.currentFabricCalc.refNo = this.allfab[0].refNo;
        this.Fc.currentFabricCalc.buyer_name = this.allfab[0].buyer_name;
        this.Fc.currentFabricCalc.style_code = this.allfab[0].style_code;
        this.Fc.currentFabricCalc.style_item_name = this.allfab[0].style_item_name;
        this.Fc.currentFabricCalc.size = this.allfab[0].size;
        this.Fc.currentFabricCalc.fabrics = this.allfab[0].fabrics;
        this.Fc.currentFabricCalc.chest = this.allfab[0].chest;
        this.Fc.currentFabricCalc.length = this.allfab[0].length;
        this.Fc.currentFabricCalc.sleeve = this.allfab[0].sleeve;
        this.Fc.currentFabricCalc.hood = this.allfab[0].hood;
        this.Fc.currentFabricCalc.bottom = this.allfab[0].bottom;
        this.Fc.currentFabricCalc.thigh = this.allfab[0].thigh;
        this.Fc.currentFabricCalc.pocket = this.allfab[0].pocket;
        this.Fc.currentFabricCalc.pocket = this.allfab[0].pocket;
        this.Fc.currentFabricCalc.fabric_weigh = this.allfab[0].fabric_weigh;


        console.log(  this.Fc.currentFabricCalc);
      }
      )

    console.log(this.Fc.currentFabricCalc);
  }

  getPrice() {
    this.Pc.getallprice().subscribe(
      (data) => {
        this.allprice = data;
        console.log(this.allprice);
       this.setcurrency=this.allprice.PriceCurrency_UOM;
       console.log(this.allprice.PriceCurrency_UOM);
      }
    );

  }


}
