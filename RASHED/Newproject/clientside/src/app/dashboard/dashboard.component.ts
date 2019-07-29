import { post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { UserService } from './../shared/user.service';
import { LocationService } from './../shared/location.service';
import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private list:LocationService,private userservice:UserService,private PostService:PostService) { }
  
  
  newLocation:any=[];
  userdetails:any={};
  allpost:post[];




  ngOnInit() {
    this.getLocationlist();
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
  //location ser
  getLocationlist():void{
    this.list.getAllLocation()
    .subscribe(data=>{
      this.newLocation=data;
      //console.log(data);
    })
 
  }
  getAllPost(){
    this.PostService.getallpost()
    .subscribe(
       (data :post[]) =>{
         this.allpost = data;
         console.log(this.allpost);
       }
    );
  
  }

  createnewpost(a:post){
   a.fullName=this.userdetails.fullName;
    a.email=this.userdetails.email;
 //console.log(a.fullName);
    this.PostService.createPost(a)
    .subscribe();
 //  console.log(a);
 this.getAllPost();
 this.clearAll();

  
   
  }
  clearAll(){
    this.PostService.currentPost={
      fullName:'',
      email: '',
      location:'',
      post:'',
      security:'',
      _id:''
    }
  }
  

}
