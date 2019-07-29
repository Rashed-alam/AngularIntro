import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';


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
  allBlog: Blog[];
  userDetails ;

  constructor(private Ls: LocationService, private blog: BlogService,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(res);
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

  getAllLocation(){
    this.Ls.getAllLocation()
    .subscribe(
       (data : Location[]) =>{
         this.allLocation = data;
    
       }
    );
  }

  createPost(b : Blog){
     b.post_user = this.userDetails.email;
    this.blog.createPost(b)
    .subscribe();
    console.log(b);
    alert('Post Created');
    this.getAllPost(); 
    this.clearAll();
   
  }


  getAllPost(){
    this.blog.getAllBlog()
    .subscribe(
       (data : Blog[]) =>{
         this.allBlog = data;
    
       }
    );
  }

  clearAll(){
    this.blog.currentBlog = {
      _id: null,
      post_title: '',
      post_description: '',
      post_location: '',
      post_privacy: '',
      post_user: ''
    }
  }




}
