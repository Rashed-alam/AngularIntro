import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 
  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;


  allLocation: Location [];
  allblog: Blog[];
  userDetails ;

  constructor(private Ls: LocationService, private blog: BlogService,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
        this.userBlogdata();
        // this.blog.getAllUserBlog(this.userDetails)
        // .subscribe(
        //   (data : Blog []) => {
        //   this.allblog = data;
          
        //   });
      },
      err => { 
        console.log(err);
        
      }
    );
    //this.userProfile();
    this.getAllLocation();
    //this.getAllPostofUser();
  }
  
//this is for showing the user their own corresponding blogs
userBlogdata(){
  this.blog.getAllUserBlog(this.userDetails)
  .subscribe(
    (data : Blog []) => {
    this.allblog = data;
    });
}
//this is for showing the user information back to profile page
userProfile(){
  this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res['user'];
    },
    err => { 
      console.log(err);
      
    }
  );
}
  

//for getting all the location from database
  getAllLocation(){
    this.Ls.getAllLocation()
    .subscribe(
       (data : Location[]) =>{
         this.allLocation = data;
    
       }
    );
  }

//for creating post from dashboard
  createPost(b : Blog){
     b.post_user = this.userDetails.email;
    this.blog.createPost(b)
    .subscribe();
    console.log(b);
    alert('Post Created');
   // this.getAllPostofUser(); 
   this.userBlogdata();
    this.clearAll();
   
   
  }


//after submitting the form, this will clear all the inputted data
  clearAll(){
    this.blog.currentBlog = {
      _id:'',
      post_title: '',
      post_description: '',
      post_location: '',
      post_privacy: '',
      post_user: ''
    }
  }

  //this will log the user out of the session
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  //this is for deleting any post
  deletePost(_id: any){
    console.log(_id);
    this.blog.deleteThisPost(_id)
    .subscribe(
      (data) =>{
      //  this.blog.getAllUserBlog(this.userDetails);
        alert('Post Deleted');
        this.userBlogdata();
      
      }
    );
  }

  // getAllPostofUser(){ 
  //   console.log(this.userDetails);
  // //   this.blog.getAllUserBlog(this.userDetails.email)
  // //         .subscribe(); 
  // //         console.log(this.userDetails);
  // }


  
  editPost(Blog){
    this.blog.currentBlog = Object.assign({},Blog);
    this.userBlogdata();
  }

  //this is for checking if the blog is to be created or updated
  createAndUpdate(currentBlog: Blog){
    
    if(currentBlog._id  == null){
      this.createPost(currentBlog);
    }
    else{
      this.updatePost(currentBlog);
    }
  }

  //this is for updating user blogs
  updatePost(bl: Blog){
    this.blog.updateUserBlog(bl)
    .subscribe();
    alert('Post Edited');
    this.userBlogdata();
  }


}
