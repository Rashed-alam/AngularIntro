import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/shared/buyers.service';
import { Buyers } from 'src/shared/buyers.model';
import { UnitofmeasurementService } from 'src/shared/unitofmeasurement.service';
import { UoM } from 'src/shared/unitofmeasurement.model';
import { from } from 'rxjs';
import { Sleeves } from 'src/shared/sleeves.model';
import { SleeveTypeService } from 'src/shared/sleeve-type.service';
import { FabricType } from 'src/shared/fabric-type.model';
import { FabricTypeService } from 'src/shared/fabric-type.service';
import { DatePipe } from '@angular/common';
import { ItemNameService } from 'src/shared/item-name.service';
import { NgForm } from '@angular/forms';
import { Items } from 'src/shared/item.model';

@Component({
  selector: 'app-fabric-calculation',
  templateUrl: './fabric-calculation.component.html',
  styleUrls: ['./fabric-calculation.component.css']
})
export class FabricCalculationComponent implements OnInit {

 
  allBuyers: Buyers [];
  allUoM: UoM[];
  allSleeveType: Sleeves[];
  allFabricType: FabricType[];
  allItems: Items[];
  showsuccessmessage:boolean;
  today: any = Date.now();
  // txtVoucherDate1 = new Date();


  constructor(private Bs:BuyersService, 
        private Ums:UnitofmeasurementService, 
        private St: SleeveTypeService,
        private ft: FabricTypeService,
        private DP: DatePipe,
        private In: ItemNameService
        ) { }
    
  ngOnInit() { 
    const present = this.DP.transform(this.today, "dd-MM-yyyy");
   this.today = present;
   this.getAllBuyersList();
   this.getAllSizeList();
   this.getAllSleeveType();
   this.getAllFabrics();
   this.getAllItems();
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

  //this is for getting all the types of fabrics from database
  getAllFabrics(){
    this.ft.getAllFabricsType()
    .subscribe(
      (data: FabricType[]) => {
        this.allFabricType = data;
      });  
  }
  //this is for getting all the items name from database
  getAllItems(){
    this.In.getAllItemNamesList()
    .subscribe(
      (data: Items[])=>{
        this.allItems = data;
      }
    )
  }


}
