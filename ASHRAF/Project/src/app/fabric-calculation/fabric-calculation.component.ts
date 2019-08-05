import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/shared/buyers.service';
import { Buyers } from 'src/shared/buyers.model';
import { UnitofmeasurementService } from 'src/shared/unitofmeasurement.service';
import { UoM } from 'src/shared/unitofmeasurement.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-fabric-calculation',
  templateUrl: './fabric-calculation.component.html',
  styleUrls: ['./fabric-calculation.component.css']
})
export class FabricCalculationComponent implements OnInit {

 
  allBuyers: Buyers [];
  allUoM: UoM[];

  constructor(private Bs:BuyersService, private Ums:UnitofmeasurementService) { }

  ngOnInit() {
   this.getAllBuyersList();
   this.getAllSizeList();
  }

  //this is for getting all the buyers list from database
  getAllBuyersList(){
    this.Bs.getAllBuyers()
    .subscribe(
       (data : Buyers[]) =>{
         this.allBuyers = data;
       });
  }

  //this is for getting all the sizes list from database
  getAllSizeList(){
    this.Ums.getAllUoM()
    .subscribe(
       (data : UoM[]) =>{
         this.allUoM = data;
       });
  }
}
