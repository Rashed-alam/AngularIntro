import { ClientSizeService } from './../shared/client-size.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
public a: any;
allsize;
showsuccessmessage: boolean;
selectadd: boolean = false;
Bid;
  constructor(private ClientSize: ClientSizeService) { }

  ngOnInit() {
    this.getId();
    this.getSize();
 //console.log(this.a.size_id);
  }
  
  selectSize(){
    this.selectadd=true;
  }
  getId() {
    this.ClientSize.getsizeid()
      .subscribe(
        res => {
          this.a = res['size_id'];
          //console.log(this.a);
        },
        err => { 
          console.log(err);
          
        }
      );
}
getSize(){
  this.ClientSize.getallsize().subscribe(
    (data)=>{this.allsize=data;
      console.log(this.allsize);
    }
  );
}
createAndUpdate(a: any) {
  // console.log(currentEmployee);
  if (a._id != null) {
    console.log('update');
    this.updatepost(a);
  } else {
    console.log('create');
    this.create(a);
    // this.ecom.getAllEmployeeCall();
  }
  this.getSize();
}

create(a:any){
  this.ClientSize.createPost(a).subscribe(
    res=>{
      console.log('ok');
      this.showsuccessmessage=true;
      setTimeout(()=>this.showsuccessmessage=false,4000);
    },
  );
  this.getSize();
  this.clearAll();
 
  }
del(a){
  this.Bid=a;
}
  deletesize( _id ){
    // console.log('check='+_id);
  this.ClientSize.deletesize(_id).subscribe();
  this.getSize();
  }
  edit(a){
    this.ClientSize.currentSize=Object.assign({},a);
    this.getSize();
    this.selectadd=true;
  }
  updatepost(a:any) {
    this.ClientSize.updatepost(a).subscribe();
    this.clearAll();
    this.getSize();
    this.selectadd=false;
  }
  clearAll() {
    this.ClientSize.currentSize = {
     size_name:'',
     size_id:null
    }
  }

}


