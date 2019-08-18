import { Component, OnInit } from '@angular/core';
import { FabricCalculationService } from 'src/shared/fabric-calculation.service';
import { FabricCalulation } from 'src/shared/fabricCalculation.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  FabricCalc: FabricCalulation[];

  constructor(private Fc: FabricCalculationService) { }

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

}
