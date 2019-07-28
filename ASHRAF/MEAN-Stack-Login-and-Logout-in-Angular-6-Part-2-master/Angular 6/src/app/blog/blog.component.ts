import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { UserService } from '../shared/user.service';



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
  userDetails;

  constructor(private Ls: LocationService, private blog: BlogService,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
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
    }, 4000);
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
      post_title: '',
      post_description: '',
      post_location: '',
      post_privacy: '',
      post_user: ''
    }
  }




}
