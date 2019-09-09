import { Component, OnInit } from '@angular/core';
import { FabricPriceServiceService } from 'src/app/services/fabric-price-service.service';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fabric-price',
  templateUrl: './fabric-price.component.html',
  styleUrls: ['./fabric-price.component.css']
})
export class FabricPriceComponent implements OnInit {

  allEntry: FabricPriceModel[];

  constructor(public FabPriService: FabricPriceServiceService) { }

  ngOnInit() {
    this.getAll();
  }
  //GET FUNCTION
  getAll(){
    this.FabPriService.getAllEntries()
    .subscribe(
      (data: FabricPriceModel[])=>{
        this.allEntry = data;
        console.log(data);
      });
  }

  //POST FUNCTION

  //UPDATE FUNCTION

  //DELETE FUNCTION
  

}
