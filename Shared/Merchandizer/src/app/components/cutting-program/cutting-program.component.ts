import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { from } from 'rxjs';
import { Buyers } from 'src/app/models/buyers.model';
import { BuyersService } from 'src/app/services/buyers.service';

@Component({
  selector: 'app-cutting-program',
  templateUrl: './cutting-program.component.html',
  styleUrls: ['./cutting-program.component.css']
})
export class CuttingProgramComponent implements OnInit {
  allreferences: any;
  allDetails: any;
  allBuyers: Buyers[];


  constructor(private  FP: FabricPriceServiceService,
              private Bs:BuyersService) { }

  ngOnInit() {
    this.getAllreference();
    this.getAllBuyersList();
  }
 
  //GET ALL REFERENCES LIST
  getAllreference(){
    this.FP.getAllReferences()
    .subscribe(
      (data) =>{
        this.allreferences = data;
      //  console.log(data);
      }
    )
  }

  //GET ALL INFORMATION AGAINST THAT REFERENCE
  getAllInformation(a){
    this.FP.getAllEntries(a)
    .subscribe(
      (data) =>{
        this.allDetails = data;
        console.log(data);
        
      }
    )
  }
  //this is for getting all the buyers list from database
  getAllBuyersList(){
    this.Bs.getAllBuyers()
    .subscribe(
       (data : Buyers[]) =>{
         this.allBuyers = data;
         console.log(this.allBuyers);
       });
  }
}
