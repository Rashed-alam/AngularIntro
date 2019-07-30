import { post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { UserService } from './../shared/user.service';
import { LocationService } from './../shared/location.service';
import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http:HttpClient,  private list: LocationService, private userservice: UserService, private PostService: PostService) { }


  newLocation: any = [];
  userdetails: any = {};
  allpost: post[];
 // showsuccessmessage:boolean;



  ngOnInit() {
    //this.getLocationlist();
    this.getAllPost();
    this.userservice.getUserProfile().subscribe(
      res => {
        this.userdetails = res['user'];
        console.log(this.userdetails.fullName);
      },
      err => {
        console.log(err);

      }
    );
  }
  // //location ser
  // getLocationlist(): void {
  //   this.list.getAllLocation()
  //     .subscribe(data => {
  //       this.newLocation = data;
  //       //console.log(data);
  //     })

  // }
  getAllPost() {
    this.PostService.getallpost()
      .subscribe(
        (data: post[]) => {
          this.allpost = data;
          console.log(this.allpost);
        }
      );

  }
//this post worked

  // createnewpost(a:post) {
  //   a.fullName = this.userdetails.fullName;
  //   a.email = this.userdetails.email;
  //   // const email = a.email;
  //    console.log(a);
  //   // this.http.post('http://localhost:3000/post/data',a, headerOption).subscribe(res=>{
  //   //   console.log(res);
  //   this.PostService.createPost(a).subscribe();
  //   }



  //   this.PostService.createPost(a)
  //     .subscribe(
  //        res=>{
  //         console.log('ok');
  //         this.showsuccessmessage=true;
  //         setTimeout(()=>this.showsuccessmessage=false,4000);
  //       },
  //       err=>{
  //       }  
  //     ); 
  //  this.getAllPost();
  //   this.clearAll();
  // }


 


}
