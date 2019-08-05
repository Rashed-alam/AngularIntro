import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/shared/buyers.service';
import { Buyers } from 'src/shared/buyers.model';
import { UnitofmeasurementService } from 'src/shared/unitofmeasurement.service';
import { UoM } from 'src/shared/unitofmeasurement.model';
import { from } from 'rxjs';
import { Sleeves } from 'src/shared/sleeves.model';
import { SleeveTypeService } from 'src/shared/sleeve-type.service';

@Component({
  selector: 'app-fabric-calculation',
  templateUrl: './fabric-calculation.component.html',
  styleUrls: ['./fabric-calculation.component.css']
})
export class FabricCalculationComponent implements OnInit {

 
  allBuyers: Buyers [];
  allUoM: UoM[];
  allSleeveType: Sleeves[];

  constructor(private Bs:BuyersService, private Ums:UnitofmeasurementService, private St: SleeveTypeService) { }

  ngOnInit() {
   this.getAllBuyersList();
   this.getAllSizeList();
   this.getAllSleeveType();
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

  //this is for getting all the types of sleeves from database
  getAllSleeveType(){
    this.St.getAllSleevesType()
    .subscribe(
       (data : Sleeves[]) =>{
         this.allSleeveType = data;
       });
  }
}
