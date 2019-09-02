import { Injectable } from '@angular/core';
import { FabricPriceModel } from 'src/app/models/fabric-price.model';

@Injectable()
export class FabricPriceServiceService {

  constructor() { }

  currentItem: FabricPriceModel = {
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
