import { LocationService } from './../shared/location.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newLocation:any=[];


  constructor(private list:LocationService) { }

  ngOnInit() {
    this.getLocationlist();
  }
  getLocationlist():void{
    this.list.getAllLocation()
    .subscribe(data=>{
      this.newLocation=data;
      console.log(data);
    })
 
  }

}
