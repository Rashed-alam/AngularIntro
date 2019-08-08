import { Component, OnInit } from '@angular/core';
import { FabricCalculationService } from 'src/shared/fabric-calculation.service';
import { FabricCalulation } from 'src/shared/fabricCalculation.model';


@Component({
  selector: 'app-fabric-result',
  templateUrl: './fabric-result.component.html',
  styleUrls: ['./fabric-result.component.css']
})
export class FabricResultComponent implements OnInit {

  FabricCalc: FabricCalulation[];
  showdeletemessage: boolean;

  constructor( private Fc: FabricCalculationService) { }

  ngOnInit() {
    this.getallFabricEntries();
  }

   //this is for getting all the fabric entries from database
   getallFabricEntries(){
    this.Fc.getAllFabricEntries()
    .subscribe(
      (data: FabricCalulation[])=>{
        this.FabricCalc = data;
        console.log(data);
      })  
  }

   //this is for deleting any entry from the database
   deleteFabricEntry(_id: any){
    var confirmation;
    confirmation= confirm("Are you sure ?");
    if(confirmation == true){
    this.Fc.deleteFabricEntry(_id)
    .subscribe(
      (data) =>{
        this.showdeletemessage=true;
        setTimeout(()=>this.showdeletemessage=false,4000);
      this.getallFabricEntries();
      });
     }
  }
}
