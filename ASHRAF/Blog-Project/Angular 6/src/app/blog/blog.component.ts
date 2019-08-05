import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingBlogs = false;


  allLocation: Location [];
  allblog: Blog[];
  userDetails ;
  today = new Date();

  constructor(private Ls: LocationService, private blog: BlogService,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(res);
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
    this.getAllLocation();
    this.getAllPost();
    

  }


  newBlogForm(){
    this.newPost = true;
    
  }


  reloadBlogs(){
    this.loadingBlogs = true;
    this.getAllPost();
 

    setTimeout(()=>{
      this.loadingBlogs = false;
    }, 2000);
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
  // createPost(b : Blog){
  //    b.post_user = this.userDetails.email;
  //    b.post_username= this.userDetails.fullName;
  //    b.post_date = this.today;
  //   this.blog.createPost(b)
  //   .subscribe();
  //   console.log(b);
  //   alert('Post Created');
  //   this.getAllPost(); 
  //   this.clearAll();
   
  // }

//to get all the posts by everyone in the dashboard page
  getAllPost(){
    this.blog.getAllBlog()
    .subscribe(
       (data : Blog[]) =>{
         this.allblog = data;
    
       }
    );
  }
//after submitting the form, this will clear all the inputted data
  // clearAll(){
  //   this.blog.currentBlog = {
  //     post_title: '',
  //     post_description: '',
  //     post_location: '',
  //     post_privacy: '',
  //     post_user: '',
  //     post_username:'',
  //     post_date: null
  //   }
  // }
  //this will log the user out of the session
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  //this is for deleting any post
  // deletePost(_id: any){
  //   console.log(_id);
  //   this.blog.deleteThisPost(_id)
  //   .subscribe(
  //     (data : Blog[]) =>{
  //       alert('Post Deleted');
      
  //     }
  //   );
  // }


}
