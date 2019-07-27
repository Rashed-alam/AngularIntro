import { Component, OnInit } from '@angular/core';
import { Location } from '../shared/location.model';
import { LocationService } from '../shared/location.service';


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

  allLocation: any= [];

  constructor(private Ls: LocationService) { }

  ngOnInit() {
    this.getAllLocation();
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
          console.log(data);
          console.log(JSON.stringify(this.allLocation));
       }
    );
  }





}
