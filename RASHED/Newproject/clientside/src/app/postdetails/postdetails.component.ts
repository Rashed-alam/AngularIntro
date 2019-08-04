import { Component, OnInit } from '@angular/core';
import { post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { UserService } from './../shared/user.service';
import { LocationService } from './../shared/location.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  allpost: post[];

  constructor( private PostService: PostService) { }

  ngOnInit() {
    this.getAllPost();
  }
  getAllPost() {
    this.PostService.getallpost()
      .subscribe(
        (data: post[]) => {
          this.allpost = data;
          console.log(this.allpost);
        }
      );
}
}
