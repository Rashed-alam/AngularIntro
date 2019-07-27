import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';

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

  constructor(private Ls: LocationService, private blog: BlogService) { }

  ngOnInit() {
    this.getAllLocation();
    this.getAllPost();
  }


  newBlogForm(){
    this.newPost = true;
  }


  reloadBlogs(){
    this.loadingBlogs = true;

    //get all blogs

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
  }


  getAllPost(){
    this.blog.getAllBlog()
    .subscribe(
       (data : Blog[]) =>{
         this.allBlog = data;
    
       }
    );
  }




}
