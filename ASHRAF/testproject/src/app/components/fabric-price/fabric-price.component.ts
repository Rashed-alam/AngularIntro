import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FabricPriceServiceService} from 'src/app/services/fabric-price-service.service';

@Component({
  selector: 'app-fabric-price',
  templateUrl: './fabric-price.component.html',
  styleUrls: ['./fabric-price.component.css']
})
export class FabricPriceComponent implements OnInit {
    

  constructor(private service: FabricPriceServiceService) { }

  ngOnInit() {
    
  }

  AddNew(a : any){
    
    console.log(a);
    this.clear();
  }

  clear(){
    this.service.currentItem = {
      name:this.service.currentItem.name,
    nid:this.service.currentItem.nid,
    address:
    [
        {
            house: '',
            flat:''
        }
       
    ]
    }
  }

   clearAll(){
    this.service.currentItem = {
      name:'',
    nid:'',
    address:
    [
        {
            house: '',
            flat:''
        }
       
    ]
    }
   }


}
