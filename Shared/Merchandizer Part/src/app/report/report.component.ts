
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  FabricCalc: FabricPriceModel[];
  AllReference: any[];
  // ArchieveList: FabricCalulation[];
  referid: string;
  fabricReport: any = [];

  constructor(private Fc: FabricPriceServiceService) { }

  ngOnInit() {
    this.getallFabricEntries();
    this.getAllReference();
    // this.match();
  }

  //this is for getting all the fabric entries from database
  getallFabricEntries() {
    this.Fc.getAllEntries()
      .subscribe(
        (data: FabricPriceModel[]) => {
          this.FabricCalc = data;
          console.log(this.FabricCalc);
        });
    console.log(this.FabricCalc);

  }
  getAllReference() {
    this.Fc.getAllref()
      .subscribe(
        (data) => {
          this.AllReference = data;
         console.log(this.AllReference);
        });
 

  }



  // match(){
  //   var l = this.FabricCalc.length;
  //   var l2 = this.ArchieveList.length;
  //   if(l2 == 0){ //checking if the the length of archieve list is empty or not
  //     for(let i= 0; i<l; i++){ //this will show datas from the Fabric entry database only since Archieve table is empty
  //     this.fabricReport.push({
  //       RFOB: this.FabricCalc[i].waste_percentage,
  //       reference: this.FabricCalc[i].refNo,
  //       Buyer: this.FabricCalc[i].buyer_name,
  //       Style: this.FabricCalc[i].style_code,
  //       Fabric: this.FabricCalc[i].fabrics,
  //       Item: this.FabricCalc[i].style_item_name,
  //       date: this.FabricCalc[i].changeDate
  //     })
  //   }
  //   }
  //   else{ //this will mixed both fabric entry and archieve table data
  //     for(let i= 0; i<l; i++){
  //       for(let j=0; j<l2; j++){
  //         if(this.FabricCalc[i].fabricEntry_id == this.ArchieveList[j].fabricEntry_id){
  //           this.fabricReport.push({
  //             FOB: this.FabricCalc[i].waste_percentage,
  //             RFOB: this.ArchieveList[j].waste_percentage,
  //             SFOB: this.ArchieveList[i].waste_percentage,
  //             reference: this.FabricCalc[i].refNo,
  //             Buyer: this.FabricCalc[i].buyer_name,
  //             Style: this.FabricCalc[i].style_code,
  //       Fabric: this.FabricCalc[i].fabrics,
  //       Item: this.FabricCalc[i].style_item_name,
  //       date: this.FabricCalc[i].changeDate
  //           })
  //         } else {
  //           this.fabricReport.push({
  //             // FOB: this.FabricCalc[i].waste_percentage,
  //             RFOB: this.FabricCalc[j].waste_percentage,
  //             // SFOB: this.FabricCalc[i].waste_percentage,
  //             reference: this.FabricCalc[i].refNo,
  //             Buyer: this.FabricCalc[i].buyer_name,
  //             Style: this.FabricCalc[i].style_code,
  //             Fabric: this.FabricCalc[i].fabrics,
  //             Item: this.FabricCalc[i].style_item_name,
  //             date: this.FabricCalc[i].changeDate
  //           })
  //         }
  //       }
  //     }

  //   }

  //   console.log('report='+JSON.stringify(this.fabricReport));
  // }



}


