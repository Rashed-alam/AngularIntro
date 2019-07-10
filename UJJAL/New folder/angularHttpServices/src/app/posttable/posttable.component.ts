import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEmployee } from '../employees';
import { EmployeeserviceService } from '../employeeservice.service';
import { Todos } from '../todos';

@Component({
  selector: 'app-posttable',
  templateUrl: './posttable.component.html',
  styleUrls: ['./posttable.component.css']
})
export class PosttableComponent implements OnInit {

 tolist: Todos ;
 public tlist =[];
 empForm: FormGroup;


  constructor(private fb:FormBuilder,private _employeeService:EmployeeserviceService) { }

  ngOnInit() {
    this.empForm = this.fb.group({
      uid: [''],
      id: [''],
      utitle: [''],
      ucom: ['']
    })


  }

  addToList(val : any) {
    
    this.tlist.push(val);
    console.log('check=' +JSON.stringify(val));
    
    //maping form value to employee interface value
    this.tolist.userId = val.uid;
    this.tolist.id = val.id;
    this.tolist.title = val.utitle;
    this.tolist.completed = val.ucom;

    console.log(JSON.stringify(this.tolist));
    //sending data to server using post method
  
    this._employeeService.addList( this.tolist).subscribe(data => this.tolist = data);

  }

}
