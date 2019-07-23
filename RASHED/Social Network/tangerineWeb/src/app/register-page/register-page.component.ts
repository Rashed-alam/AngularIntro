import { RegisterServiceService } from './../register-service.service';
import { User } from './../UserModel';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public allUser: User[] = [];

  UserList: any = [];



  employ = new User();

  constructor(private list: RegisterServiceService ) { }

  ngOnInit() {
   // this.getUserList();
  }


  // getUserList(): void {
  //   this.list.getAlluser()
  //     .subscribe(data => {
  //       this.UserList = data;
  //       //this.allUser = data;
  //     })
  // }


  // deleteUser(_id: any) {
  //   console.log(_id);
  //   this.list.deleteUser(_id).subscribe(
  //     (data: User) => {
  //       this.getUserList();
  //     }
  //   );
  // }


  // edit(emp) {
  //   this.list.currentUser = Object.assign({}, emp);
  //   this.getUserList();

  // }


  // createAndUpdate(currentUser: User) {
  //   // console.log(currentUser);
  //   if (currentUser._id != null) {
  //     console.log('update');
  //     this.updateUser(currentUser);
  //   } else {
  //     console.log('create');
  //     this.createUser(currentUser);
  //     // this.ecom.getAllUserCall();
  //   }
  //   this.getUserList();
  // }


  createUser(emp: User) {
    this.list.createUser(emp).subscribe((res: User) =>
      console.log(res)
    );
    this.clear();


  }
  // updateUser(emp: User) {
  //   this.list.updateUser(emp).subscribe();
  // }
  clear() {
    this.list.currentUser =
      {
        _id: null,
        firstname: '',
        lastname: '',
        contact: null,
        gender: '',
        password:''
      }

  }

}
